import http from "../http-common.js";

class LeverancierService {
  getAll() {
    return http.get("/leveranciers");
  }

  get(id) {
    return http.get(`/leveranciers/${id}`);
  }

  create(data) {
    return http.post("/leveranciers", data);
  }

  update(id, data) {
    return http.put(`/leveranciers/${id}`, data);
  }

  delete(id) {
    return http.delete(`/leveranciers/${id}`);
  }

  deleteAll() {
    return http.delete(`/leveranciers`);
  }
  
  findByTitle(title) {
    return http.get(`/leveranciers?title=${title}`);
  }
}

export default new LeverancierService();