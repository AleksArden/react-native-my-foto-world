import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const ButtonCreatePosts = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.btn} activeOpacity={0.8} onPress={onPress}>
      <Text style={styles.plus}>
        <AntDesign name="plus" size={18} color="#fff" />
      </Text>
    </TouchableOpacity>
  );
};
export default ButtonCreatePosts;

const styles = StyleSheet.create({
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 40,
    backgroundColor: '#FF6C00',
    alignSelf: 'center',
    borderRadius: 100,
    marginLeft: 31,
    marginRight: 31,
  },
  plus: {
    fontSize: 24,
    color: '#FFF',
  },
});
