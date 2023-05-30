import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from '../../firebase/config';

import { saveUser, removeUser } from './authSlice';

export const registerUser =
  ({ email, password, login }) =>
  async (dispatch) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: login });
      onAuthStateChanged(auth, (user) => {
        console.log(user);
        if (user) {
          const currentUser = {
            id: user.uid,
            email: user.email,
            login: user.displayName,
          };
          dispatch(saveUser(currentUser));
        } else {
        }
      });
      //   const user = auth.currentUser;
      //   console.log(user);
      //   if (user) {
      //     const currentUser = { id: user.uid, email: user.email };
      //     console.log(currentUser);
      //     dispatch(saveUser(currentUser));
      //   } else {
      //   }
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
        console.log(user);
        if (user) {
          console.log(user);
          const currentUser = {
            id: user.uid,
            email: user.email,
            login: user.displayName,
          };
          console.log(currentUser);
          dispatch(saveUser(currentUser));
        } else {
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
