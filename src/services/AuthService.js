import http from "../http-common.js";

class AuthService {
  login(data) {
    return http.post("/auth/login", data);
  }

  adminLogin(data) {
    return http.post("/auth/admin", data);
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
