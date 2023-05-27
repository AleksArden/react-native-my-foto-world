import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

const ButtonOrangeOval = ({ onPress, children, image }) => {
  return (
    <TouchableOpacity
      disabled={image === null ? true : false}
      style={image === null ? btnDisabled : styles.btn}
      activeOpacity={0.7}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};
export default ButtonOrangeOval;

const styles = StyleSheet.create({
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: 70,
    height: 40,
    marginLeft: 31,
    marginRight: 31,

    backgroundColor: '#FF6C00',
    borderRadius: 100,
  },
  btnDisabled: {
    backgroundColor: '#F6F6F6',
  },
});
const btnDisabled = StyleSheet.compose(styles.btn, styles.btnDisabled);
