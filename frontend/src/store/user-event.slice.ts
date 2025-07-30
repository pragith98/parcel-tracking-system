import { createSlice } from "@reduxjs/toolkit";

interface UserEventState {
  currentUserEvent: string;
}

const initialState: UserEventState = {
  currentUserEvent: ''
};

const userEventSlice = createSlice({
  name: 'userEvent',
  initialState,
  reducers: {
    addUserEvent(state, action) {
      state.currentUserEvent = action.payload;
    }
  },
});

export const { addUserEvent } = userEventSlice.actions;
export default userEventSlice.reducer;