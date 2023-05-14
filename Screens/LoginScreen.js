import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  ImageBackground,
  KeyboardAvoidingView,
} from 'react-native';

import Image from '../assets/images/Photo-BG.jpg';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const LoginScreen = () => {
  const [email, onChangeEmail] = useState();
  const [password, onChangePassword] = useState();

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [onFocus, setOnFocus] = useState({ focusedInput: '' });
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [showHide, setShowHide] = useState('Show');

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
    console.log({ email, password });
    onChangeEmail('');
    onChangePassword('');
  };

  const handlePasswordVisibility = () => {
    if (passwordVisibility === true) {
      setPasswordVisibility(!passwordVisibility);
      setShowHide('Hide');
    } else {
      setPasswordVisibility(!passwordVisibility);
      setShowHide('Show');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <ImageBackground source={Image} resizeMode="cover" style={styles.image}>
          <KeyboardAvoidingView style={styles.wrapper} behavior="height">
            <View style={styles.form}>
              <Text style={styles.title}>Sign in</Text>

              <TextInput
                style={
                  onFocus.focusedInput === 'email' ? inputOnFocus : styles.input
                }
                autoComplete="off"
                onChangeText={onChangeEmail}
                placeholder="Email Address"
                placeholderTextColor="#BDBDBD"
                cursorColor="#212121"
                value={email}
                onFocus={() => setOnFocus({ focusedInput: 'email' })}
                onBlur={() => setOnFocus({ focusedInput: '' })}
              />
              <View
                style={[
                  { marginBottom: !isShowKeyboard ? 43 : 32 },
                  { position: 'relative' },
                ]}
              >
                <TextInput
                  style={
                    onFocus.focusedInput === 'password'
                      ? inputOnFocus
                      : styles.input
                  }
                  autoComplete="off"
                  onChangeText={onChangePassword}
                  placeholder="Password"
                  placeholderTextColor="#BDBDBD"
                  cursorColor="#212121"
                  value={password}
                  secureTextEntry={passwordVisibility}
                  onFocus={() => setOnFocus({ focusedInput: 'password' })}
                  onBlur={() => setOnFocus({ focusedInput: '' })}
                />
                <TouchableOpacity
                  style={styles.btnShowHide}
                  activeOpacity={1}
                  onPress={handlePasswordVisibility}
                >
                  <Text style={styles.textShowHide}>{showHide}</Text>
                </TouchableOpacity>
              </View>
              {!isShowKeyboard && (
                <>
                  <TouchableOpacity
                    style={styles.btn}
                    onPress={formSubmit}
                    activeOpacity={0.8}
                  >
                    <Text style={styles.textBtn}>Sign in</Text>
                  </TouchableOpacity>
                  <Text style={styles.text}>
                    Don't have an account? Register
                  </Text>
                </>
              )}
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: screenWidth,
    height: screenHeight,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  form: {
    position: 'relative',
    paddingTop: 32,
    paddingHorizontal: 16,

    backgroundColor: '#FFFFFF',

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
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
  btnShowHide: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  textShowHide: {
    color: '#1B4371',

    fontFamily: 'Roboto-regular',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 19,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 51,
    marginBottom: 16,

    backgroundColor: '#FF6C00',
    borderRadius: 100,
  },
  textBtn: {
    color: '#ffffff',

    fontFamily: 'Roboto-regular',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: 1.5,
  },
  text: {
    marginBottom: 144,

    color: '#1B4371',

    fontFamily: 'Roboto-regular',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
  },
});
const inputOnFocus = StyleSheet.compose(styles.input, styles.inputOnFocus);
