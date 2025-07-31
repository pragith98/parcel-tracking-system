import { api } from "../services/api.service";
import type { AuthApiResponse, LoginCredentials } from "../types/user.type";

export const userLogin = async (
  credentials: LoginCredentials
): Promise<AuthApiResponse> => {
  return api.post<AuthApiResponse>('/auth/login', credentials);
}

export const fetchAuthUser = async (): Promise<AuthApiResponse> => {
  return api.get<AuthApiResponse>('/auth/user');
}