import { configureStore } from '@reduxjs/toolkit';
import companyReducer from './company.slice';
import authReducer from './auth.slice';

export const store = configureStore({
  reducer: {
    company: companyReducer,
    auth: authReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;