import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign } from '@expo/vector-icons';

import ButtonText from './ButtonText';
import { uploadPhotoToServer } from '../Servises/uploadServerFunctions';

const UserImageRegistration = ({ dispatchForm }) => {
  const [avatar, setAvater] = useState(null);

  const downloadAvatar = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        const image = result.assets[0].uri;
        console.log(image);

        const imageURL = await uploadPhotoToServer(image, 'avatars');

        dispatchForm({ type: 'avatar', payload: imageURL });
        setAvater(imageURL);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={{ uri: avatar }} />

      <ButtonText style={styles.iconBtn} onPress={downloadAvatar}>
        <AntDesign name="pluscircleo" size={24} color="#FF6C00" />
      </ButtonText>
    </View>
  );
};
export default UserImageRegistration;
const styles = StyleSheet.create({
  imageContainer: {
    position: 'absolute',
    flex: 1,

    width: 120,
    height: 120,
    left: '55%',
    transform: [{ translateX: -60 }, { translateY: -60 }],

    backgroundColor: '#F6F6F6',
    borderRadius: 16,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  iconBtn: {
    position: 'absolute',
    top: 81,
    right: -12,
  },
});
