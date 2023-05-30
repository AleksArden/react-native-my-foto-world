import React from 'react';
import { View, StyleSheet } from 'react-native';

import ButtonText from './ButtonText';
import Icon from '../assets/icons/icon-add.svg';

const UserImageContainer = () => {
  return (
    <View style={styles.imageContainer}>
      <ButtonText style={styles.iconBtn}>{/* <Icon /> */}</ButtonText>
    </View>
  );
};
export default UserImageContainer;
const styles = StyleSheet.create({
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
});
