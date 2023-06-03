import { createSlice } from '@reduxjs/toolkit';

const state = {
  user: {
    login: null,
    email: null,
    id: null,
    avatar: null,
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
    updateUserAvatar: (state, { payload }) => {
      state.user = payload;
    },
  },
});

export const { saveUser, removeUser, refreshUser, updateUserAvatar } =
  authSlice.actions;

export const authReducer = authSlice.reducer;
