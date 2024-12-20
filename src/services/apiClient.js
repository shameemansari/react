import axios from 'axios';
import URLS from '../constants/urls';
import { notifyCustomError, notifyError } from '../utils/toasts';

const apiClient = axios.create({
    baseURL: URLS.BASE_URL,
    withCredentials: true,
    withXSRFToken: true,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
});


apiClient.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem('token');
        if(token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response) {
        switch (error.response.status) {
          case 401:
            notifyCustomError("Unauthorized! Please login again.")
            localStorage.removeItem('token');
            window.location.href = '/';
            break;
          case 500:
            notifyCustomError("Internal Server Error. Please try again later.")
            break;
          default:
            notifyCustomError(`Error: ${error.response.status} - ${error.response.data.message || 'Something went wrong'}`)
            break;
        }
      } else if (error.request) {
        notifyCustomError("Network error. Please check your connection.")
      } else {
        notifyCustomError("Request setup failed.")
      }
  
      return Promise.reject(error);
    }
  );
  

export default apiClient;