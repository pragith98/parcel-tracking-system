export interface UserRole {
  id:   string;
  name: string;
}

export interface UserRoleApiResponse {
  data:     UserRole[] | UserRole;
  success:  true;
}

export interface UserRoleToCreate {
  name: string;
}