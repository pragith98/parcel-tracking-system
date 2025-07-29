import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { UserRole } from "../types/user-role.type";
import { deleteUserRoles, fetchUserRoles, getUserRoleById, updateUserRoleById } from "../api/user-role-api.service";

interface UserRoleState {
  current: UserRole | null;
  list: UserRole[];
  loading: boolean;
  error: string | null;
}

const initialState: UserRoleState = {
  current: null,
  list: [],
  loading: false,
  error: null
};

export const getUserRoles = createAsyncThunk('userRole/fetch', fetchUserRoles);
export const selectUserRoleById = createAsyncThunk('userRole/select', getUserRoleById);
export const removeUserRole = createAsyncThunk(
  'userRole/delete',
  async (id: string, { dispatch }) => {
    await deleteUserRoles(id);
    await dispatch(getUserRoles());
  }
);
export const updateUserRole = createAsyncThunk(
  'userRole/update',
  async (userRole: UserRole, { dispatch }) => {
    await updateUserRoleById(userRole);
    await dispatch(getUserRoles());
  }
);

const userRoleSlice = createSlice({
  name: 'userRole',
  initialState,
  reducers: {
    resetSelectedUserRole(state) {
      state.current = null;
    }
  },
  extraReducers: builder => {
    builder
      // Fetch
      .addCase(getUserRoles.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserRoles.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload.data as UserRole [];
      })
      .addCase(getUserRoles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to fetch user roles';
      })

      // Get by id
      .addCase(selectUserRoleById.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(selectUserRoleById.fulfilled, (state, action) => {
        state.loading = false;
        state.current = action.payload.data as UserRole;
      })
      .addCase(selectUserRoleById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to fetch user role by id';
      })

      // Update
      .addCase(updateUserRole.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserRole.fulfilled, (state) => {
        state.loading = false;
        state.current = null;
      })
      .addCase(updateUserRole.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to update user role by id';
      })

      // Delete
      .addCase(removeUserRole.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeUserRole.fulfilled, state => {
        state.loading = false;
        state.error = null;
      })
      .addCase(removeUserRole.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to delete user role';
      });
  }
});

export const { resetSelectedUserRole } = userRoleSlice.actions;
export default userRoleSlice.reducer;