import axios from 'axios';

export const portafolioApi = axios.create({
  baseURL: 'https://portfolio-backend-api-gyxd.onrender.com/api',
});
