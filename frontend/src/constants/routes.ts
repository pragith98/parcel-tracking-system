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
  [ROUTES.HOME]: { showAddNew: false, title: 'Dashboard' },
  [ROUTES.PARCELS]: { showAddNew: true, userEvent: UserEvents.OPEN_PARCEL_FORM, title: 'Parcels' },
  [ROUTES.USERS]: { showAddNew: true, userEvent: UserEvents.OPEN_USER_FORM, title: 'Users' },
  [ROUTES.USER_ROLES]: { showAddNew: true, userEvent: UserEvents.OPEN_USER_ROLE_FORM, title: 'User Roles' },
  [ROUTES.PERMISSIONS]: { showAddNew: false, title: 'Permissions' },
  [ROUTES.COMPANY]: { showAddNew: false, title: 'Company' },
  [ROUTES.NOT_FOUND]: { showAddNew: false, title: 'Not found' },
}