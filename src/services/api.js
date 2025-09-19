import axios from 'axios'

const api = axios.create({
  baseURL: "/api", // works in dev + prod, proxy/nginx handles redirection
  headers: {
    "Content-Type": "application/json",
  },
  // withCredentials: true, // only enable if you use cookies/session auth
});

export default api;

/*
export default () => {
    return axios.create({
        //baseURL: 'http://185.220.172.6:5000'
        //baseURL: import.meta.env.VITE_API_URL 
        baseURL: '/api'
    })
}
    */