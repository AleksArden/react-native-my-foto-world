import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ onPress, name, image }) => {
  return (
    <TouchableOpacity
      disabled={image === null ? true : false}
      style={image === null ? btnDisabled : styles.btn}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={image === null ? textDisabled : styles.textBtn}>{name}</Text>
    </TouchableOpacity>
  );
};
export default Button;

const styles = StyleSheet.create({
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
  btnDisabled: {
    backgroundColor: '#F6F6F6',
  },
  textDisabled: {
    color: '#BDBDBD',
  },
});
const btnDisabled = StyleSheet.compose(styles.btn, styles.btnDisabled);
const textDisabled = StyleSheet.compose(styles.textBtn, styles.textDisabled);
