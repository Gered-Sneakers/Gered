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
  
  findByName(name) {
    return http.get(`/Werknemers/search?name=${name}`);
  }

  login(data){
    return http.post("werknemers/login",data);
  }

  adminLogin(data){
    return http.post("/werknemers/admin",data);
  }
}

export default new WerknemerService();