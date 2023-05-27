import React from 'react';
import { TouchableOpacity } from 'react-native';

const ButtonText = ({ children, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={style} activeOpacity={0.7}>
      {children}
    </TouchableOpacity>
  );
};
export default ButtonText;
