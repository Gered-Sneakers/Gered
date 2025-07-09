import http from "../http-common.js";

class RepairsService {
  getAll() {
    return http.get("/repairs");
  }

  create(data) {
    return http.post("/repairs", data);
  }

  update(id, data) {
    return http.put(`/repairs/${id}`, data);
  }
}

export default new RepairsService();