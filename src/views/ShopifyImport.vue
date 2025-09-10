<template>
  <div class="p-6 space-y-4">
    <h1 class="text-2xl font-bold">Shopify CSV Import</h1>

    <div class="space-y-2">
      <input type="file" accept=".csv" @change="onFile" />
      <div class="text-sm text-gray-600">
        Vereist: <code>handle</code>, <code>title</code>, <code>vendor</code>, <code>type</code>,
        <code>variant price</code>, <code>published</code>. Als
        <code>variant inventory tracker</code> = <code>shopify</code>, dan ook
        <code>variant inventory qty</code> en (aanrader) <code>variant inventory policy</code>.
      </div>
    </div>

    <div class="row">
      <div v-if="errors.length" class="col-4 p-3 rounded bg-red-50 text-red-700">
        <div class="font-semibold mb-1">Validation errors:</div>
        <ul class="list-disc ml-6">
          <li v-for="(e,i) in errors" :key="i">{{ e }}</li>
        </ul>
      </div>

      <div v-if="rows.length" class="col-8 border rounded">
        <div class="p-3 flex items-center justify-between">
          <div><span class="font-medium">Rows:</span> {{ rows.length }}</div>
          <button :disabled="loading || errors.length" @click="onImport"
                  class="px-4 py-2 rounded bg-black text-white disabled:opacity-50">
            {{ loading ? 'Importing…' : 'Import to Shopify' }}
          </button>
        </div>

        <div class="max-h-80 mx-auto text-center overflow-auto text-sm">
          <table class="min-w-full border-t">
            <thead class="sticky top-0 bg-white">
              <tr>
                <th class="p-2 text-left">handle</th>
                <th class="p-2 text-left">title</th>
                <th class="p-2 text-left">vendor</th>
                <th class="p-2 text-left">type</th>
                <th class="p-2 text-left">status</th>
                <th class="p-2 text-left">published</th>
                <th class="p-2 text-left">opt1 Model</th>
                <th class="p-2 text-left">val1</th>
                <th class="p-2 text-left">opt2 Size</th>
                <th class="p-2 text-left">val2</th>
                <th class="p-2 text-left">variant sku</th>
                <th class="p-2 text-left">variant price</th>
                <th class="p-2 text-left">inv tracker</th>
                <th class="p-2 text-left">inv qty</th>
                <th class="p-2 text-left">inv policy</th>
                <th class="p-2 text-left">variant barcode</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(r, i) in rows" :key="i" class="border-t">
                <td class="p-2">{{ r.handle }}</td>
                <td class="p-2">{{ r.title }}</td>
                <td class="p-2">{{ r.vendor }}</td>
                <td class="p-2">{{ r.type }}</td>
                <td class="p-2">{{ r.status }}</td>
                <td class="p-2">{{ r.published }}</td>
                <td class="p-2">{{ r.option1_name }}</td>
                <td class="p-2">{{ r.option1_value }}</td>
                <td class="p-2">{{ r.option2_name }}</td>
                <td class="p-2">{{ r.option2_value }}</td>
                <td class="p-2">{{ r.variant_sku }}</td>
                <td class="p-2">{{ r.variant_price }}</td>
                <td class="p-2">{{ r.variant_inventory_tracker }}</td>
                <td class="p-2">{{ r.variant_inventory_qty }}</td>
                <td class="p-2">{{ r.variant_inventory_policy }}</td>
                <td class="p-2">{{ r.variant_barcode }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div v-if="result && result.ok" class="p-3 rounded bg-green-50 text-green-700">
      <div class="font-semibold">Import complete</div>
      <div>{{ result.results.length }} product handles processed.</div>
    </div>
  </div>
</template>

<script setup>
import Papa from "papaparse";
import { ref } from "vue";
import { bulkUpsert } from "@/services/shopify";

const rows = ref([]);
const errors = ref([]);
const loading = ref(false);
const result = ref(null);

function normalizeRow(raw) {
  const clean = (v) => (typeof v === "string" ? v.trim() : v);
  const toNum = (v) => (v == null || v === "" ? null : Number(String(v).replace(',', '.')));
  const toLower = (v) => (clean(v) ? String(clean(v)).toLowerCase() : "");
  const def = (v, d) => (v == null || v === "" ? d : v);

  // Map Shopify CSV headers -> camel/snake props
  const option1_name  = clean(raw["option1 name"]);
  const option1_value = clean(raw["option1 value"]);
  const option2_name  = clean(raw["option2 name"]);
  const option2_value = clean(raw["option2 value"]);
  const option3_name  = clean(raw["option3 name"]);
  const option3_value = clean(raw["option3 value"]);

  const status = toLower(def(raw.status, "active"));
  const invTracker = def(clean(raw["variant inventory tracker"]), "shopify");
  const invPolicy  = toLower(def(clean(raw["variant inventory policy"]), "deny"));
  const invQty     = raw["variant inventory qty"] == null || raw["variant inventory qty"] === ""
                      ? 1
                      : Number(raw["variant inventory qty"]);

  return {
    handle: clean(raw.handle),
    title: clean(raw.title),
    vendor: clean(raw.vendor),
    type: clean(raw.type),
    status,
    published: clean(raw.published),

    option1_name,
    option1_value,
    option2_name,
    option2_value,
    option3_name,
    option3_value,

    variant_sku: clean(raw["variant sku"]),
    variant_price: toNum(raw["variant price"]),
    variant_compare_at_price: toNum(raw["variant compare at price"]),

    variant_inventory_tracker: invTracker,
    variant_inventory_qty: invQty,
    variant_inventory_policy: invPolicy,

    variant_barcode: clean(raw["variant barcode"]),

    image_src: clean(raw["image src"]),
    image_position: raw["image position"] ? Number(raw["image position"]) : null,
    image_alt_text: clean(raw["image alt text"]),
  };
}

function validate(all) {
  const errs = [];
  const ALLOWED_STATUS = new Set(["active","draft","archived"]);
  const ALLOWED_POLICY = new Set(["deny","continue"]);

  all.forEach((r, i) => {
    const row = i + 1;
    if (!r.handle) errs.push(`Row ${row}: missing handle`);
    if (!r.title) errs.push(`Row ${row}: missing title`);
    if (!r.vendor) errs.push(`Row ${row}: missing vendor`);
    if (!r.type) errs.push(`Row ${row}: missing type`);

    if (r.variant_price == null || Number.isNaN(r.variant_price)) {
      errs.push(`Row ${row}: missing or invalid variant price`);
    }

    if (r.published == null || r.published === "") {
      errs.push(`Row ${row}: missing published (TRUE/FALSE)`);
    }

    if (r.status && !ALLOWED_STATUS.has(String(r.status).toLowerCase())) {
      errs.push(`Row ${row}: invalid status (use active/draft/archived)`);
    }

    // Inventory checks when Shopify tracks it
    if ((r.variant_inventory_tracker || "").toLowerCase() === "shopify") {
      if (r.variant_inventory_qty == null || Number.isNaN(Number(r.variant_inventory_qty))) {
        errs.push(`Row ${row}: missing variant inventory qty (tracker=shopify)`);
      }
      if (r.variant_inventory_policy && !ALLOWED_POLICY.has(r.variant_inventory_policy)) {
        errs.push(`Row ${row}: invalid variant inventory policy (deny/continue)`);
      }
    }

    // Option consistency
    if ((r.option1_name && !r.option1_value) || (!r.option1_name && r.option1_value)) {
      errs.push(`Row ${row}: option1 name/value must both be provided or both empty`);
    }
    if ((r.option2_name && !r.option2_value) || (!r.option2_name && r.option2_value)) {
      errs.push(`Row ${row}: option2 name/value must both be provided or both empty`);
    }
    if ((r.option3_name && !r.option3_value) || (!r.option3_name && r.option3_value)) {
      errs.push(`Row ${row}: option3 name/value must both be provided or both empty`);
    }
  });

  return errs;
}

function onFile(e) {
  const file = e.target.files?.[0];
  if (!file) return;

  Papa.parse(file, {
    header: true,
    skipEmptyLines: true,
    complete: (res) => {
      const parsed = (res.data || []).map(normalizeRow);
      const errs = validate(parsed);
      rows.value = parsed;
      errors.value = errs;
      result.value = null;
    },
    error: (err) => {
      errors.value = [String(err)];
    },
  });
}

async function onImport() {
  if (errors.value.length) return;
  loading.value = true;
  result.value = null;
  try {
    // Stuur de genormaliseerde Shopify-rijen 1-op-1 door; je backend kan deze
    // direct mappen naar Shopify Product + Variant + Inventory + Images.
    result.value = await bulkUpsert(rows.value);
  } catch (e) {
    errors.value = [e?.response?.data?.error || e.message];
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped>
table { border-collapse: collapse; width: 100%; }
th, td { border-bottom: 1px solid #eee; }
code { background: #f6f6f6; padding: 1px 4px; border-radius: 4px; }
</style>
