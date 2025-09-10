// controllers/shopifyController.js
const { shopify } = require("../services/shopifyService");
const { upsertRows } = require("../services/shopifyImport");

async function health(req, res) {
  return res.json({ ok: true });
}

async function locations(req, res) {
  try {
    const r = await shopify.get("/locations.json");
    res.json(r.data);
  } catch (e) {
    res.status(500).json({ error: e?.response?.data || e.message });
  }
}

async function bulkUpsert(req, res) {
  try {
    const rows = Array.isArray(req.body) ? req.body : [];
    if (!rows.length) return res.status(400).json({ error: "Body must be an array of rows" });
    const results = await upsertRows(rows);
    res.json({ ok: true, results });
  } catch (e) {
    res.status(500).json({ error: e?.response?.data || e.message });
  }
}

module.exports = { health, locations, bulkUpsert };
