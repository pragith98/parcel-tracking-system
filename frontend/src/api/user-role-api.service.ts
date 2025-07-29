import { api } from "../services/api.service";
import type { UserRoleApiResponse } from "../types/user-role.type";

export const fetchUserRoles = async (): Promise<UserRoleApiResponse> => {
  return api.get<UserRoleApiResponse>('/user-roles');
}

export const getUserRoleById = async (id: string): Promise<UserRoleApiResponse> => {
  return api.get<UserRoleApiResponse>(`/user-roles/${id}`);
}

export const deleteUserRoles = async (id: string): Promise<boolean> => {
  return api.delete<boolean>(`/user-roles/${id}`);
}