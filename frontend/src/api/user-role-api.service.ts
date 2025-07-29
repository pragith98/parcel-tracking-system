import { api } from "../services/api.service";
import type { UserRole, UserRoleApiResponse, UserRoleToSave } from "../types/user-role.type";

export const fetchUserRoles = async (): Promise<UserRoleApiResponse> => {
  return api.get<UserRoleApiResponse>('/user-roles');
}

export const getUserRoleById = async (id: string): Promise<UserRoleApiResponse> => {
  return api.get<UserRoleApiResponse>(`/user-roles/${id}`);
}

export const updateUserRoleById = async (
  userRole: UserRole
): Promise<UserRoleApiResponse> => {
  return api.put<UserRoleApiResponse>(`/user-roles/${userRole.id}`, userRole);
}

export const createUserRole = async (
  userRole: UserRoleToSave
): Promise<UserRoleApiResponse> => {
  return api.post<UserRoleApiResponse>('/user-roles/', userRole);
}

export const deleteUserRoles = async (id: string): Promise<boolean> => {
  return api.delete<boolean>(`/user-roles/${id}`);
}