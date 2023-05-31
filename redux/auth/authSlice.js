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

    refreshUser: (state, { payload }) => {
      state.stateChange = payload;
    },
  },
});

export const { saveUser, removeUser, refreshUser } = authSlice.actions;

export const authReducer = authSlice.reducer;
