import http from "../http-common.js";

class LabelcolorService {
  getAll() {
    return http.get("/Labelcolors");
  }

  get(id) {
    return http.get(`/Labelcolors/${id}`);
  }

  create(data) {
    return http.post("/Labelcolors", data);
  }

  update(id, data) {
    return http.put(`/Labelcolors/${id}`, data);
  }

  delete(id) {
    return http.delete(`/Labelcolors/${id}`);
  }

  deleteAll() {
    return http.delete(`/Labelcolors`);
  }
  
  findByTitle(title) {
    return http.get(`/Labelcolors?title=${title}`);
  }
}

export default new LabelcolorService();