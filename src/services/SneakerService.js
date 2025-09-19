//import http from "../http-common.js";
import http from "@/services/api"

class SneakerService {
  getAll() {
    return http.get("/Sneakers");
  }

  get(id) {
    return http.get(`/Sneakers/${id}`);
  }

  create(data) {
    try{
      return http.post("/Sneakers", data);
    }
    catch{
      alert("Sneaker toevoegen mislukt.")
    }
  }

  update(id, data) {
    return http.put(`/Sneakers/${id}`, data);
  }

  delete(id) {
    return http.delete(`/Sneakers/${id}`);
  }

  deleteAll() {
    return http.delete(`/Sneakers`);
  }
  
  findByTitle(title) {
    return http.get(`/Sneakers?title=${title}`);
  }
}

export default new SneakerService();