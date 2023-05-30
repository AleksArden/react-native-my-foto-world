import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyC3VlMfDiev8DZ48icELncmjAHhkPM_Br4',
  authDomain: 'my-photo-world-48c2b.firebaseapp.com',
  projectId: 'my-photo-world-48c2b',
  storageBucket: 'my-photo-world-48c2b.appspot.com',
  messagingSenderId: '87601341741',
  appId: '1:87601341741:web:460eada595ba8275e05fa4',
  measurementId: 'G-D581SHR28V',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);
