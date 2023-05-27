import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { MaterialIcons } from '@expo/vector-icons';

const CameraComponent = ({ image, onPress }) => {
  const [type, setType] = useState(CameraType.back);
  const [cameraRef, setCameraRef] = useState(null);
  const [hasPermission, setHerPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();

      await MediaLibrary.requestPermissionsAsync();

      setHerPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePhoto = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();

      await MediaLibrary.createAssetAsync(uri);

      onPress(uri);
    }
  };

  const toggleCameraType = () => {
    setType((current) =>
      current === CameraType.back ? CameraType.back : CameraType.front
    );
  };
  return (
    <Camera style={styles.camera} type={type} ref={setCameraRef}>
      {image && (
        <View style={styles.imageContainer}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      )}

      <TouchableOpacity
        disabled={image}
        style={image ? btnTransparent : styles.btnPhoto}
        onPress={takePhoto}
      >
        <MaterialIcons
          name="camera-alt"
          size={24}
          color={image ? 'transpareent' : '#ffffff'}
        />
      </TouchableOpacity>
    </Camera>
  );
};
export default CameraComponent;
const styles = StyleSheet.create({
  camera: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    height: 240,
    marginBottom: 8,

    borderRadius: 8,
    borderWidth: 1,
  },
  btnPhoto: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#ffffff',
    opacity: 0.3,
    borderRadius: 50,
  },
  btnTransparent: {
    opacity: 0,
  },
  imageContainer: {
    position: 'absolute',

    borderWidth: 1,
    borderColor: '#ffffff',
    zIndex: 100,
  },
  image: {
    height: 200,
    width: 300,
  },
});
const btnTransparent = StyleSheet.compose(
  styles.btnPhoto,
  styles.btnTransparent
);
