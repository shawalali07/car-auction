import axios from "axios";
import { browserRoutes } from "../constants/browserRoutes";

export const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
});

api.interceptors.request.use((request: any) => {
  const token = localStorage.getItem("token");

  request.headers.Authorization = token ? `Bearer ${token}` : "";
  return request;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      localStorage.clear();
      window.location.replace(browserRoutes.LOGIN);
    }

    return Promise.reject(error);
  },
);
