export interface UserRole {
  id:   string;
  name: string;
}

export interface UserRoleApiResponse {
  data:     UserRole[];
  success:  true;
}

export interface UserRoleToSave {
  name: string;
}