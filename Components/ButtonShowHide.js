import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ButtonShowHide = ({ onPress, name }) => {
  return (
    <TouchableOpacity
      style={styles.btnShowHide}
      activeOpacity={1}
      onPress={onPress}
    >
      <Text style={styles.textShowHide}>{name}</Text>
    </TouchableOpacity>
  );
};
export default ButtonShowHide;

const styles = StyleSheet.create({
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
});
