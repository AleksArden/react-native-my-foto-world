import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { registerUser } from './authOperations';

const initialState = {
  user: {
    login: '',
    email: '',
    id: '',
  },
  stateChange: false,
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    // builder.addCase(registerUser.fulfilled, (state, { payload }) => {
    //   state.user = payload;
    // });
  },
});

const persistConfig = {
  key: 'auth',
  storage: AsyncStorage,
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
