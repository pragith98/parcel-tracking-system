import type { PermissionItem } from "./permission.type";
import type { UserRole } from "./user-role.type";

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface User {
  id:         string;
  username:   string;
  name:       string;
  email:      string;
  telephone:  string;
  nic:        string;
  address:    string;
  userRole:   UserRole;
}

export interface UserToCreate {
  name:       string;
  email:      string;
  telephone:  string;
  nic:        string;
  address:    string;
  username:   string;
  password:   string;
  userRoleId: string;
}

export interface UserToUpdate {
  id:         string;
  name:       string;
  email:      string;
  telephone:  string;
  nic:        string;
  address:    string;
  username:   string;
  userRoleId: string;
}

export interface AuthApiResponse {
  user:       User;
  permission: PermissionItem[];
}

export interface UserApiResponse {
  data:     User[] | User;
  success:  true;
}