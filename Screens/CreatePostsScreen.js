import React, { useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
} from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import * as Location from 'expo-location';

import Button from '../Components/Button';
import ButtonOrangeOval from '../Components/ButtonOrangeOval';

const CreatePostsScreen = ({ navigation }) => {
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [hasPermission, setHerPermission] = useState(null);
  const [image, setImage] = useState(null);
  const isFocused = useIsFocused();

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
      setImage(uri);
    }
  };

  const publishPhoto = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      navigation.navigate('HomePosts', { image });

      setImage(null);
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    const coords = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };

    navigation.navigate('HomePosts', { image, coords });

    setImage(null);
  };

  const deletePhoto = () => {
    console.log('delete');
    setImage(null);
  };

  const toggleCameraType = () => {
    setType((current) =>
      current === CameraType.back ? CameraType.back : CameraType.front
    );
  };
  return (
    <View style={styles.container}>
      {isFocused && (
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
      )}
      <TouchableOpacity style={styles.editBtn} activeOpacity={0.7}>
        <Text style={styles.textEditBtn}>Edit photo</Text>
      </TouchableOpacity>
      <View>
        <TextInput
          style={styles.input}
          autoComplete="off"
          // onChangeText={() => {}}
          placeholder="Name photo"
          placeholderTextColor="#BDBDBD"
          cursorColor="#212121"
          // value={}
        />
        <View style={styles.containerInputLocation}>
          <TextInput
            style={inputLocation}
            autoComplete="off"
            // onChangeText={() => {}}
            placeholder="Location"
            placeholderTextColor="#BDBDBD"
            cursorColor="#212121"
            // value={}
          />
          <Feather
            disabled
            style={styles.markLocation}
            name="map-pin"
            size={24}
            color="#BDBDBD"
          />
        </View>
        <Button image={image} name="Publish" onPress={publishPhoto} />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonOrangeOval image={image} onPress={deletePhoto}>
          <Feather
            name="trash-2"
            size={24}
            color={image === null ? '#BDBDBD' : '#ffffff'}
          />
        </ButtonOrangeOval>
      </View>
    </View>
  );
};
export default CreatePostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 32,
    paddingBottom: 34,
    paddingHorizontal: 16,
  },
  camera: {
    position: 'relative',
    height: 240,

    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 1,
  },
  btnPhoto: {
    width: 60,
    height: 60,
    backgroundColor: '#ffffff',
    opacity: 0.3,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
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
  editBtn: {
    marginBottom: 32,
  },
  textEditBtn: {
    fontFamily: 'Roboto-regular',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 19,
    color: '#BDBDBD',
    letterSpacing: 1.5,
  },
  input: {
    height: 50,
    marginBottom: 16,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderColor: '#BDBDBD',
    fontFamily: 'Roboto-medium',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 19,
    color: '#212121',
  },
  containerInputLocation: {
    position: 'relative',
    marginBottom: 32,
  },
  inputLocation: {
    marginBottom: 0,
    paddingLeft: 28,
  },
  markLocation: {
    position: 'absolute',
    left: 0,
    top: 6,
  },
  btnTrash: {
    marginTop: 120,
  },
  buttonContainer: {
    marginTop: 'auto',
    alignItems: 'center',
  },
});
const inputLocation = StyleSheet.compose(styles.input, styles.inputLocation);
const btnTransparent = StyleSheet.compose(
  styles.btnPhoto,
  styles.btnTransparent
);
