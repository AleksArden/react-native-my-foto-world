import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    login: null,
    email: null,
    id: null,
  },
  stateChange: false,
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveUser: (state, { payload }) => {
      state.user = payload;
    },
  },
});

export const { saveUser } = authSlice.actions;

export const authReducer = authSlice.reducer;
