import http from "../http-common.js";

class BrandService {
  getAll() {
    return http.get("/Brands");
  }

  get(id) {
    return http.get(`/brands/${id}`);
  }

  create(data) {
    return http.post("/brands", data);
  }

  update(id, data) {
    return http.put(`/brands/${id}`, data);
  }

  delete(id) {
    return http.delete(`/brands/${id}`);
  }

  deleteAll() {
    return http.delete(`/brands`);
  }
  
  findByTitle(title) {
    return http.get(`/brands?title=${title}`);
  }
}

export default new BrandService();