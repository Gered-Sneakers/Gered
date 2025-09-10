// services/shopifyImport.js
const { shopify, getLocationId } = require("./shopifyService");

const handleToId = new Map();

function num(n) {
  if (n == null || n === "") return undefined;
  const s = String(n).replace(",", ".").trim();
  const v = Number(s);
  return Number.isFinite(v) ? v : undefined;
}
function toStatus(published) {
  const v = String(published ?? "").toLowerCase().trim();
  return v === "true" || v === "1" || v === "yes" ? "active" : "draft";
}
function escapeHtml(s) {
  return String(s ?? "").replace(/[&<>"']/g, m => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[m]));
}
function bodyHtml(row) {
  const parts = [];
  if (row.model) parts.push(`<p><strong>Model:</strong> ${escapeHtml(row.model)}</p>`);
  if (row.uitgave) parts.push(`<p><strong>Edition:</strong> ${escapeHtml(row.uitgave)}</p>`);
  return parts.join("") || `<p>Restored sneakers by Gered.</p>`;
}
function makeSku({ vendor, model, maat }) {
  const v = vendor ? vendor[0]?.toUpperCase() : "G";
  return `${v}-${String(model ?? "M").replace(/\s+/g, "").toUpperCase()}-${maat}`;
}

async function buildHandleCache() {
  handleToId.clear();
  let params = { limit: 250, fields: "id,handle" };
  while (true) {
    const r = await shopify.get("/products.json", { params });
    const products = r.data.products || [];
    for (const p of products) handleToId.set(p.handle, p.id);
    if (products.length < 250) break;
    const last = products[products.length - 1];
    params = { limit: 250, fields: "id,handle", since_id: last.id };
  }
}
async function ensureCache() {
  if (handleToId.size === 0) await buildHandleCache();
}
async function ensureImage(productId, { src, position, alt }) {
  if (!src) return;
  try {
    const r = await shopify.get(`/products/${productId}/images.json`);
    const exists = (r.data.images || []).some(img => img.src === src);
    if (exists) return;
    await shopify.post(`/products/${productId}/images.json`, { image: { src, position: num(position), alt } });
  } catch (e) {
    console.warn("image error", e?.response?.data || e.message);
  }
}
async function setInventory(inventory_item_id, qty) {
  const location_id = await getLocationId();
  if (!location_id || qty == null) return;
  await shopify.post("/inventory_levels/set.json", {
    location_id,
    inventory_item_id,
    available: Number(qty),
  });
}

async function upsertRows(rows) {
  await ensureCache();

  // Group CSV rows by product handle
  const byHandle = new Map();
  for (const r of rows) {
    const h = r.handle?.trim();
    if (!h) continue;
    if (!byHandle.has(h)) byHandle.set(h, []);
    byHandle.get(h).push(r);
  }

  const results = [];

  for (const [handle, group] of byHandle.entries()) {
    const base = group[0];

    const productPayload = {
      title: base.title,
      body_html: bodyHtml(base),
      vendor: base.vendor,
      product_type: base.type,
      handle,
      status: toStatus(base.published),
      options: [{ name: "Size" }],
      images: base.imgSrc ? [{ src: base.imgSrc, position: num(base.imgPos), alt: base.imgAlt }] : [],
    };

    let productId = handleToId.get(handle);

    if (!productId) {
      try {
        const c = await shopify.post("/products.json", { product: productPayload });
        productId = c.data.product.id;
        handleToId.set(handle, productId);
      } catch (e) {
        if (e?.response?.status === 422) {
          await buildHandleCache();
          productId = handleToId.get(handle);
          if (!productId) throw e;
        } else throw e;
      }
    } else {
      try {
        await shopify.put(`/products/${productId}.json`, { product: { id: productId, ...productPayload } });
      } catch (e) {
        console.warn("product update failed", e?.response?.data || e.message);
      }
    }

    const product = (await shopify.get(`/products/${productId}.json`)).data.product;

    if (base.imgSrc) await ensureImage(productId, { src: base.imgSrc, position: base.imgPos, alt: base.imgAlt });

    for (const row of group) {
      const size = String(row.maat ?? "").trim();
      if (!size) continue;

      const exists = product.variants.find(v => String(v.option1) === size);

      const price = num(row.price);
      const compare_at_price = num(row.retailprice);
      const qty = num(row.amount);
      const barcode = row.id;
      const sku = makeSku({ vendor: row.vendor, model: row.model, maat: size });

      if (!exists) {
        const v = await shopify.post(`/products/${productId}/variants.json`, {
          variant: {
            option1: size,
            price: price != null ? price.toString() : undefined,
            compare_at_price: compare_at_price != null ? compare_at_price.toString() : undefined,
            sku,
            barcode,
            inventory_management: "shopify",
          },
        });
        if (qty != null) await setInventory(v.data.variant.inventory_item_id, qty);
      } else {
        await shopify.put(`/variants/${exists.id}.json`, {
          variant: {
            id: exists.id,
            option1: size,
            price: price != null ? price.toString() : undefined,
            compare_at_price: compare_at_price != null ? compare_at_price.toString() : null,
            sku,
            barcode,
            inventory_management: "shopify",
          },
        });
        const refreshed = (await shopify.get(`/variants/${exists.id}.json`)).data.variant;
        if (qty != null) await setInventory(refreshed.inventory_item_id, qty);
      }
    }

    results.push({ handle, product_id: productId });
  }

  return results;
}

module.exports = { upsertRows };