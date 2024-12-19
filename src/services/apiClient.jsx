import axios from 'axios';
import URLS from '../constants/urls';

const apiClient = axios.create({
    baseURL: URLS.BASE_URL,
    withCredentials: true,
    // withXSRFToken: true,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
});


apiClient.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem('token');
        // const XSRFToken = localStorage.getItem('XSRFToken');
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
            console.error('Unauthorized! Please login again.');
            localStorage.removeItem('token');
            window.location.href = '/login';
            break;
          case 500:
            console.error('Internal Server Error. Please try again later.');
            break;
          default:
            console.error(`Error: ${error.response.status} - ${error.response.data.message || 'Something went wrong'}`);
            break;
        }
      } else if (error.request) {
        console.error('Network error. Please check your connection.');
      } else {
        console.error('Request setup failed.');
      }
  
      return Promise.reject(error);
    }
  );
  

export default apiClient;