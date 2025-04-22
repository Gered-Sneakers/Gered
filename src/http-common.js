import axios from "axios"; 

const baseURL = import.meta.env.PROD
  ? 'https://g-app.be'
  : 'http://localhost:8080/api';
 
export default axios.create({ 
  baseURL: "http://localhost:8080/api", 
  //baseURL,
  headers: { "Content-type": "application/json" } 
}); 