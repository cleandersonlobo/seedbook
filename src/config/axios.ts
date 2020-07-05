import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: __DEV__
    ? 'http://localhost:1337'
    : 'https://livremente.herokuapp.com',
  timeout: 90000,
});

export default axiosInstance;
