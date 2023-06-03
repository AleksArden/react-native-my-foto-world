import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../firebase/config';
import { nanoid } from 'nanoid';

export const uploadPostToServerWithoutCoords = async ({
  userId,
  userLogin,
  image,
  name,
  location,
  nameStorage,
}) => {
  const imageURL = await uploadPhotoToServer(image, nameStorage);
  try {
    await addDoc(collection(db, 'posts'), {
      image: imageURL,
      name,
      location,
      userId,
      userLogin,
    });
  } catch (error) {
    console.log(error);
  }
};

export const uploadPostToServerWithCoords = async ({
  coords,
  image,
  name,
  location,
  userId,
  userLogin,
  nameStorage,
}) => {
  const imageURL = await uploadPhotoToServer(image, nameStorage);
  try {
    await addDoc(collection(db, 'posts'), {
      image: imageURL,
      name,
      location,
      coords,
      userId,
      userLogin,
      likes: 0,
    });
  } catch (error) {
    console.log(error);
  }
};

export const uploadPhotoToServer = async (image, nameStorage) => {
  try {
    const response = await fetch(image);
    const file = await response.blob();
    const imageId = nanoid();

    const storageRef = ref(storage, `${nameStorage}/${imageId}`);
    await uploadBytes(storageRef, file);

    const imageURL = await getDownloadURL(
      ref(storage, `${nameStorage}/${imageId}`)
    );
    return imageURL;
  } catch (error) {
    console.log(error.message);
  }
};
