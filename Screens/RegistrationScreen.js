import React, { useState, useEffect, useReducer } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from '../assets/icons/icon-add.svg';
import ImageBackgroundComponent from '../Components/ImageBackground';
import Button from '../Components/Button';
import ButtonShowHide from '../Components/ButtonShowHide';

import {
  btnShowHideReducer,
  formReducer,
  initStateBtnShowHide,
  initStateRegister,
} from '../Servises/reducer';

const RegistrationScreen = () => {
  const navigation = useNavigation();
  const [stateForm, dispatchForm] = useReducer(formReducer, initStateRegister);

  const [stateShowHide, dispatchShowHide] = useReducer(
    btnShowHideReducer,
    initStateBtnShowHide
  );

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [inputName, setInputName] = useState('');

  useEffect(() => {
    const showKeyboard = Keyboard.addListener('keyboardDidShow', () => {
      setIsShowKeyboard(true);
    });
    const hideKeyboard = Keyboard.addListener('keyboardDidHide', () => {
      setIsShowKeyboard(false);
    });
    return () => {
      showKeyboard.remove();
      hideKeyboard.remove();
    };
  }, []);

  const formSubmit = () => {
    console.log({
      login: stateForm.login,
      email: stateForm.email,
      password: stateForm.password,
    });
    navigation.navigate('Home');
    dispatchForm({ type: 'login', payload: '' });
    dispatchForm({ type: 'email', payload: '' });
    dispatchForm({ type: 'password', payload: '' });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <ImageBackgroundComponent>
          <KeyboardAvoidingView style={styles.wrapper} behavior="height">
            <View style={styles.form}>
              <View style={styles.imageContainer}>
                <TouchableOpacity style={styles.iconBtn}>
                  <View>
                    <Icon />
                  </View>
                </TouchableOpacity>
              </View>
              <Text style={styles.title}>Registration</Text>

              <TextInput
                style={inputName === 'login' ? inputOnFocus : styles.input}
                onChangeText={(value) =>
                  dispatchForm({ type: 'login', payload: value })
                }
                autoComplete="off"
                placeholder="Login"
                placeholderTextColor="#BDBDBD"
                cursorColor="#212121"
                value={stateForm.login}
                onFocus={() => setInputName('login')}
                onBlur={() => setInputName('')}
              />

              <TextInput
                style={inputName === 'email' ? inputOnFocus : styles.input}
                onChangeText={(value) =>
                  dispatchForm({ type: 'email', payload: value })
                }
                autoComplete="off"
                placeholder="Email Address "
                placeholderTextColor="#BDBDBD"
                cursorColor="#212121"
                value={stateForm.email}
                onFocus={() => setInputName('email')}
                onBlur={() => setInputName('')}
              />

              <View
                style={[
                  { marginBottom: !isShowKeyboard ? 43 : 32 },
                  { position: 'relative' },
                ]}
              >
                <TextInput
                  style={inputName === 'password' ? inputOnFocus : styles.input}
                  onChangeText={(value) =>
                    dispatchForm({ type: 'password', payload: value })
                  }
                  autoComplete="off"
                  placeholder="Email"
                  placeholderTextColor="#BDBDBD"
                  cursorColor="#212121"
                  value={stateForm.password}
                  secureTextEntry={stateShowHide.passwordVisibility}
                  onFocus={() => setInputName('password')}
                  onBlur={() => setInputName('')}
                />
                <ButtonShowHide
                  onPress={() =>
                    dispatchShowHide({
                      type: 'passwordVisibility',
                      payload: !stateShowHide.passwordVisibility,
                    })
                  }
                  name={stateShowHide.btnShowHide}
                />
              </View>

              {!isShowKeyboard && (
                <>
                  <Button onPress={formSubmit} name="Register" />

                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate('Login')}
                  >
                    <Text style={styles.text}>
                      Already have an account? Sign in
                    </Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          </KeyboardAvoidingView>
        </ImageBackgroundComponent>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  form: {
    position: 'relative',
    paddingTop: 92,
    paddingHorizontal: 16,

    backgroundColor: '#FFFFFF',

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
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
  iconBtn: {
    position: 'absolute',
    top: 81,
    right: -12,
  },
  title: {
    marginBottom: 32,

    color: '#212121',

    fontFamily: 'Roboto-medium',
    fontStyle: 'normal',
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',
    letterSpacing: 1.5,
  },
  input: {
    height: 50,
    marginBottom: 16,
    padding: 16,

    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderRadius: 8,

    fontFamily: 'Roboto-regular',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 19,
    color: '#212121',
  },
  inputOnFocus: {
    backgroundColor: '#FFFFFF',
    borderColor: '#FF6C00',
  },

  text: {
    marginBottom: 78,

    color: '#1B4371',

    fontFamily: 'Roboto-regular',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
  },
});
const inputOnFocus = StyleSheet.compose(styles.input, styles.inputOnFocus);
