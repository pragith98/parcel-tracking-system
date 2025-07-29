import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { UserRole } from "../types/user-role.type";
import { fetchUserRoles } from "../api/user-role-api.service";

interface UserRoleState {
  current: UserRole | null;
  list:    UserRole[];
  loading: boolean;
  error:   string | null;
}

const initialState: UserRoleState = {
  current: null,
  list: [],
  loading: false,
  error: null
};

export const getUserRoles = createAsyncThunk('userRole/fetch', fetchUserRoles);

const userRoleSlice = createSlice({
  name: 'userRole',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // Fetch
      .addCase(getUserRoles.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserRoles.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload.data;
      })
      .addCase(getUserRoles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to fetch user roles';
      });
  }
});

export default userRoleSlice.reducer;