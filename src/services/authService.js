import apiClient from "./apiClient";
import URLS from "../constants/urls";

// export const setCsrfToken = async () => {
//     return await apiClient.get(`${URLS.BASE_URL}/sanctum/csrf-cookie`);
// };
  
export const authLogin = async ({email, password}) => {
    return await apiClient.post(URLS.v1.AUTH_LOGIN, {email, password});
}

export const authUser = async () => {
    return await apiClient.get(URLS.v1.AUTH_USER);
}

export const authLogout = async () => {
    return apiClient.post(URLS.v1.AUTH_LOGOUT);
}

