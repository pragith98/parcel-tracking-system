import axios from "axios";

const API_BASE_URL = 'http://localhost:8000/api/v1';;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
});

export const api = {
  get: <T = unknown>(url: string, params?: Record<string, unknown>) =>
    apiClient.get<T>(url, { params }).then(res => res.data),

  post: <T = unknown>(url: string, data?: unknown) =>
    apiClient.post<T>(url, data).then(res => res.data),

  put: <T = unknown>(url: string, data?: unknown) =>
    apiClient.put<T>(url, data).then(res => res.data),

  patch: <T = unknown>(url: string, data?: unknown) =>
    apiClient.patch<T>(url, data).then(res => res.data),

  delete: <T = unknown>(url: string, params?: unknown) =>
    apiClient.delete<T>(url, { params }).then(res => res.data),
};