import { api } from "../services/api.service";
import type { UserApiResponse, UserToCreate, UserToUpdate } from "../types/user.type";

export const fetchUsers = async (): Promise<UserApiResponse> => {
  return api.get<UserApiResponse>('/users');
}

export const getUserById = async (id: string): Promise<UserApiResponse> => {
  return api.get<UserApiResponse>(`/users/${id}`);
}

export const updateUserById = async (
  user: UserToUpdate
): Promise<UserApiResponse> => {
  return api.put<UserApiResponse>(`/users/${user.id}`, user);
}

export const createUser = async (
  user: UserToCreate
): Promise<UserApiResponse> => {
  return api.post<UserApiResponse>('/users/', user);
}

export const deleteUsers = async (id: string): Promise<boolean> => {
  return api.delete<boolean>(`/users/${id}`);
}