import React from 'react';
import { useDispatch } from 'react-redux';
import { Feather } from '@expo/vector-icons';

import { signOutUser } from '../redux/auth/authOperations';
import ButtonText from './ButtonText';

const ButtonLogOut = ({ style }) => {
  const dispatch = useDispatch();
  return (
    <ButtonText style={style} onPress={() => dispatch(signOutUser())}>
      <Feather name="log-out" size={24} color="#BDBDBD" />
    </ButtonText>
  );
};
export default ButtonLogOut;
