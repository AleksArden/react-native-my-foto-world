import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ onPress, name }) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.textBtn}>{name}</Text>
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
});
