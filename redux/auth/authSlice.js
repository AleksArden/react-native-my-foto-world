import { createSlice } from '@reduxjs/toolkit';

const state = {
  user: {
    login: null,
    email: null,
    id: null,
  },
  stateChange: false,
};
export const authSlice = createSlice({
  name: 'auth',
  initialState: state,
  reducers: {
    saveUser: (state, { payload }) => {
      state.user = payload;
    },
    removeUser: () => state,
  },
});

export const { saveUser, removeUser } = authSlice.actions;

export const authReducer = authSlice.reducer;
