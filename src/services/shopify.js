import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8080",
  timeout: 30000,
});

export async function bulkUpsert(rows) {
  const { data } = await api.post("/api/shopify/bulk-upsert", rows);
  return data;
}

export async function getLocations() {
  const { data } = await api.get("/api/shopify/locations");
  return data;
}