import React, { useState, useEffect } from 'react';
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
import Icon from '../assets/icons/icon-add.svg';
import ImageBackgroundComponent from '../Components/ImageBackground';
import Button from '../Components/Button';

const RegistrationScreen = () => {
  const [login, onChangeLogin] = useState();
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
    console.log({ login, email, password });
    onChangeLogin('');
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
                style={
                  onFocus.focusedInput === 'login' ? inputOnFocus : styles.input
                }
                autoComplete="off"
                onChangeText={onChangeLogin}
                placeholder="Login"
                placeholderTextColor="#BDBDBD"
                cursorColor="#212121"
                value={login}
                onFocus={() => setOnFocus({ focusedInput: 'login' })}
                onBlur={() => setOnFocus({ focusedInput: '' })}
              />
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
                  <Button onPress={formSubmit} name="Register" />
                  <Text style={styles.text}>
                    Already have an account? Sign in
                  </Text>
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
