import { api } from "../services/api.service";
import type { UserRoleApiResponse } from "../types/user-role.type";

export const fetchUserRoles = async (): Promise<UserRoleApiResponse> => {
  return api.get<UserRoleApiResponse>('/user-roles');
}