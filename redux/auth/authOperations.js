// import {
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
//   updateProfile,
// } from 'firebase/auth';
// import { auth } from '../../firebase/config';

// export const registerUser =
//   ({ email, password, login }) =>
//   async () => {
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       const user = await auth.currentUser;
//       console.log('user', user);
//       console.log('login', login);
//       // await updateProfile(user, {
//       //   login: login,
//       // });
//       // console.log(user.login);
//       //     console.log(user.email);
//       //     console.log(user.uid);
//       //     const currentUser = {
//       //       login: user.login,
//       //       email: user.email,
//       //       id: user.uid,
//       //     };

//       // console.log('currentUser', currentUser);
//       return user;
//     } catch (error) {
//       console.log(error);
//     }
//   };
