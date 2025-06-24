import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5002/api', // updated to match new port
});
export default api;
