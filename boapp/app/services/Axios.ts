import axios from 'axios';

const createClient = () => {
  const cliente = axios.create({
    baseURL: 'http://localhost:8080/',
  });
  return cliente;
}

export default createClient;