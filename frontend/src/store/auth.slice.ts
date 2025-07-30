import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { User } from "../types/user.type";
import type { PermissionItem } from "../types/permission.type";
import { userLogin } from "../api/auth-api.service";

interface AuthState {
  isAuth:     boolean;
  authUser:   User | null;
  permission: PermissionItem[];
  loading:    boolean;
  error:      string | null;
}

const initialState: AuthState = {
  isAuth: false,
  authUser: null,
  permission: [],
  loading: false,
  error: null
};

export const login = createAsyncThunk('auth/login', userLogin);

const companySlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // Login
      .addCase(login.pending, state => {
        state.loading = true;
        state.isAuth = false;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuth = true;
        state.authUser = action.payload.user;
        state.permission = action.payload.permission;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.isAuth = false;
        state.error = action.error.message ?? 'Failed to login';
      });
  }
});

export default companySlice.reducer;