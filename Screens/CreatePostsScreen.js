import React, { useReducer, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  TextInput,
} from 'react-native';

import { Feather } from '@expo/vector-icons';
import * as Location from 'expo-location';
import CameraComponent from '../Components/Camera';
import Button from '../Components/Button';
import ButtonOrangeOval from '../Components/ButtonOrangeOval';
import { formReducer, initStateCreatePosts } from '../Servises/reducer';

const CreatePostsScreen = ({ navigation }) => {
  const [state, dispatchForm] = useReducer(formReducer, initStateCreatePosts);
  const [image, setImage] = useState(null);

  const isFocused = useIsFocused();

  const publishPhoto = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      navigation.navigate('Posts', {
        image,
        name: state.name,
        location: state.location,
      });

      setImage(null);
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    const coords = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };

    navigation.navigate('Posts', {
      image,
      name: state.name,
      location: state.location,
      coords,
    });

    setImage(null);
  };

  const deletePhoto = () => {
    console.log('delete');
    a;
    setImage(null);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {isFocused && <CameraComponent image={image} onPress={setImage} />}
        <TouchableOpacity style={styles.editBtn} activeOpacity={0.7}>
          <Text style={styles.textEditBtn}>Edit photo</Text>
        </TouchableOpacity>
        <View>
          <TextInput
            style={styles.input}
            autoComplete="off"
            onChangeText={(value) =>
              dispatchForm({ type: 'name', payload: value })
            }
            placeholder="Name photo"
            placeholderTextColor="#BDBDBD"
            cursorColor="#212121"
            value={state.name}
          />
          <View style={styles.containerInputLocation}>
            <TextInput
              style={inputLocation}
              autoComplete="off"
              onChangeText={(value) =>
                dispatchForm({ type: 'location', payload: value })
              }
              placeholder="Location"
              placeholderTextColor="#BDBDBD"
              cursorColor="#212121"
              value={state.location}
            />
            <Feather
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
    </TouchableWithoutFeedback>
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
