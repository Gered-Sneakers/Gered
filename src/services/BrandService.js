import http from "../http-common.js";

class BrandService {
  getAll() {
    return http.get("/Leveranciers");
  }

  get(id) {
    return http.get(`/Leveranciers/${id}`);
  }

  create(data) {
    return http.post("/Leveranciers", data);
  }

  update(id, data) {
    return http.put(`/Leveranciers/${id}`, data);
  }

  delete(id) {
    return http.delete(`/Leveranciers/${id}`);
  }

  deleteAll() {
    return http.delete(`/Leveranciers`);
  }
  
  findByTitle(title) {
    return http.get(`/Leveranciers?title=${title}`);
  }
}

export default new BrandService();