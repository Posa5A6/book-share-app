import axios from 'axios';

const BASE_URL = 'https://book-share-app-yt3y.onrender.com';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
