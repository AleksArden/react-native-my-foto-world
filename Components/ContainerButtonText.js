import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text } from 'react-native';

import ButtonText from './ButtonText';

const ContainerButtonText = ({ question, name, screen }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>{question}</Text>
      <ButtonText
        style={{ marginLeft: 5 }}
        onPress={() => navigation.navigate(screen)}
      >
        <Text style={styles.text}>{name}</Text>
      </ButtonText>
    </View>
  );
};
export default ContainerButtonText;
const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    marginBottom: 144,
  },
  text: {
    color: '#1B4371',

    fontFamily: 'Roboto-regular',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
  },
});
