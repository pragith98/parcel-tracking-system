import { UserEvents } from "./user-events"

export const ROUTES = {
  HOME: '/',
  PARCELS: '/parcels',
  USERS: '/users',
  USER_ROLES: '/user-roles',
  PERMISSIONS: '/permissions',
  COMPANY: '/company',
  LOGIN: '/login',
  NOT_FOUND: '*'
}

export const ROUTE_CONFIG = {
  [ROUTES.HOME]: { showAddNew: false },
  [ROUTES.PARCELS]: { showAddNew: true, userEvent: UserEvents.OPEN_PARCEL_FORM },
  [ROUTES.USERS]: { showAddNew: true, userEvent: UserEvents.OPEN_USER_FORM },
  [ROUTES.USER_ROLES]: { showAddNew: true, userEvent: UserEvents.OPEN_USER_ROLE_FORM },
  [ROUTES.PERMISSIONS]: { showAddNew: false },
  [ROUTES.COMPANY]: { showAddNew: false },
  [ROUTES.NOT_FOUND]: { showAddNew: false },
}