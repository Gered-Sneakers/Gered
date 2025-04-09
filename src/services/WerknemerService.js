import http from "../http-common.js";

class WerknemerService {
  getAll() {
    return http.get("/Werknemers");
  }

  get(id) {
    return http.get(`/Werknemers/${id}`);
  }

  create(data) {
    return http.post("/Werknemers", data);
  }

  update(id, data) {
    return http.put(`/Werknemers/${id}`, data);
  }

  delete(id) {
    return http.delete(`/Werknemers/${id}`);
  }

  deleteAll() {
    return http.delete(`/Werknemers`);
  }
  
  findByTitle(title) {
    return http.get(`/Werknemers?title=${title}`);
  }
}

export default new WerknemerService();