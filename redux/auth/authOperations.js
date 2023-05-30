import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../../firebase/config';
import { saveUser } from './authSlice';

export const registerUser =
  ({ email, password, login }) =>
  async (dispatch) => {
    sdfgh;
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: login });
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
