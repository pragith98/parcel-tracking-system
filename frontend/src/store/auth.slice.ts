import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { User } from "../types/user.type";
import type { PermissionItem } from "../types/permission.type";
import { fetchAuthUser, userLogin } from "../api/auth-api.service";

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
export const getAuthUser = createAsyncThunk('auth/user', fetchAuthUser);

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
      })

      // Get auth user
      .addCase(getAuthUser.pending, state => {
        state.loading = true;
        state.isAuth = false;
        state.error = null;
      })
      .addCase(getAuthUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuth = true;
        state.authUser = action.payload.user;
        state.permission = action.payload.permission;
      })
      .addCase(getAuthUser.rejected, (state, action) => {
        state.loading = false;
        state.isAuth = false;
        state.error = action.error.message ?? 'Failed to get auth user';
      });
  }
});

export default companySlice.reducer;