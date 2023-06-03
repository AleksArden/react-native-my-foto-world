import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from '../../firebase/config';

import {
  saveUser,
  removeUser,
  refreshUser,
  updateUserAvatar,
} from './authSlice';

export const registerUser =
  ({ email, password, login, avatar }) =>
  async (dispatch) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: login,
        photoURL: avatar,
      });

      onAuthStateChanged(auth, (user) => {
        if (user) {
          const currentUser = {
            id: user.uid,
            email: user.email,
            login: user.displayName,
            avatar: user.photoURL,
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
            avatar: user.photoURL,
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

export const authStateChangeUser = () => (dispatch) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const currentUser = {
        id: user.uid,
        email: user.email,
        login: user.displayName,
        avatar: user.photoURL,
      };

      dispatch(saveUser(currentUser));
      dispatch(refreshUser(true));
    }
  });
};

export const updateAvatar =
  ({ avatar }) =>
  async (dispatch) => {
    try {
      await updateProfile(auth.currentUser, {
        photoURL: avatar,
      });
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const currentUser = {
            id: user.uid,
            email: user.email,
            login: user.displayName,
            avatar: user.photoURL,
          };

          dispatch(updateUserAvatar(currentUser));
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
