import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { User, UserToCreate, UserToUpdate } from "../types/user.type";
import { createUser, deleteUsers, fetchUsers, getUserById, updateUserById } from "../api/user-api.service";

interface UserState {
  current: User | null;
  list: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  current: null,
  list: [],
  loading: false,
  error: null
};

export const getUsers = createAsyncThunk('user/fetch', fetchUsers);
export const selectUserById = createAsyncThunk('user/select', getUserById);
export const removeUser = createAsyncThunk(
  'user/delete',
  async (id: string, { dispatch }) => {
    await deleteUsers(id);
    await dispatch(getUsers());
  }
);
export const updateUser = createAsyncThunk(
  'user/update',
  async (user: UserToUpdate, { dispatch }) => {
    await updateUserById(user);
    await dispatch(getUsers());
  }
);
export const addNewUser = createAsyncThunk(
  'user/create',
  async (user: UserToCreate, { dispatch }) => {
    await createUser(user);
    await dispatch(getUsers());
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetSelectedUser(state) {
      state.current = null;
    }
  },
  extraReducers: builder => {
    builder
      // Fetch
      .addCase(getUsers.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload.data as User[];
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to fetch users';
      })

      // Get by id
      .addCase(selectUserById.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(selectUserById.fulfilled, (state, action) => {
        state.loading = false;
        state.current = action.payload.data as User;
      })
      .addCase(selectUserById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to fetch user by id';
      })

      // Update
      .addCase(updateUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state) => {
        state.loading = false;
        state.current = null;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to update user by id';
      })

      // Create
      .addCase(addNewUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addNewUser.fulfilled, (state) => {
        state.loading = false;
        state.current = null;
      })
      .addCase(addNewUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to create user';
      })

      // Delete
      .addCase(removeUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeUser.fulfilled, state => {
        state.loading = false;
        state.error = null;
      })
      .addCase(removeUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to delete user';
      });
  }
});

export const { resetSelectedUser } = userSlice.actions;
export default userSlice.reducer;