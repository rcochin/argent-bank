import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001',
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
        localStorage.clear();
        window.location.href = "/";
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
