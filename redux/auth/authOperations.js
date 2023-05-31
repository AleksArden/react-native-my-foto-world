import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from '../../firebase/config';

import { saveUser, removeUser, refreshUser } from './authSlice';

export const registerUser =
  ({ email, password, login }) =>
  async (dispatch) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: login });

      onAuthStateChanged(auth, (user) => {
        if (user) {
          const currentUser = {
            id: user.uid,
            email: user.email,
            login: user.displayName,
          };
          dispatch(saveUser(currentUser));
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

export const signInUser =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);

      onAuthStateChanged(auth, (user) => {
        if (user) {
          const currentUser = {
            id: user.uid,
            email: user.email,
            login: user.displayName,
          };

          dispatch(saveUser(currentUser));
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

export const signOutUser = () => async (dispatch) => {
  try {
    await signOut(auth);

    dispatch(removeUser());
  } catch (error) {
    console.log(error);
  }
};

export const authStateChangeUser = () => async (dispatch) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const currentUser = {
        id: user.uid,
        email: user.email,
        login: user.displayName,
      };

      dispatch(saveUser(currentUser));
      dispatch(refreshUser(true));
    }
  });
};
