export const ROUTES = {
  HOME: '/',
  PARCELS: '/parcels',
  USERS: '/users',
  USER_ROLES: '/user-roles',
  PERMISSIONS: '/permissions',
  COMPANY: '/company',
  NOT_FOUND: '*'
}

export const ROUTE_CONFIG = {
  [ROUTES.HOME]: { showAddNew: false },
  [ROUTES.PARCELS]: { showAddNew: true },
  [ROUTES.USERS]: { showAddNew: true },
  [ROUTES.USER_ROLES]: { showAddNew: true },
  [ROUTES.PERMISSIONS]: { showAddNew: false },
  [ROUTES.COMPANY]: { showAddNew: false },
  [ROUTES.NOT_FOUND]: { showAddNew: false },
}