import { configureStore } from '@reduxjs/toolkit';
import companyReducer from './company.slice';
import authReducer from './auth.slice';
import userRoleReducer from './user-role.slice';

export const store = configureStore({
  reducer: {
    company: companyReducer,
    auth: authReducer,
    userRole: userRoleReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;