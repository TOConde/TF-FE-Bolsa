import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000' //8080 para local
});

export default apiClient;