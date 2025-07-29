import type { PermissionItem } from "./permission.type";

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
}

export interface AuthApiResponse {
  user:       User;
  permission: PermissionItem[];
}