import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

import ButtonText from './ButtonText';
import IconLocation from './IconLocation';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/config';

const ImageItem = ({ post }) => {
  const { image, name, coords, location, postId } = post;
  const navigation = useNavigation();
  const [amountComments, setAmountComments] = useState(0);

  useEffect(() => {
    getAmountComments();
  }, []);

  const getAmountComments = async () => {
    onSnapshot(collection(db, 'posts', postId, 'comments'), (data) => {
      setAmountComments(data.docs.length);
    });
  };
  return (
    <View style={styles.imageContainer}>
      <Image source={{ uri: image }} style={styles.image} />
      {name ? (
        <Text style={styles.textName}>{name}</Text>
      ) : (
        <Text style={textNoName}>No name</Text>
      )}
      <View style={styles.wrapperNavigation}>
        <ButtonText
          style={{ marginRight: 6 }}
          onPress={() => navigation.navigate('Comments', { image, postId })}
        >
          <Feather name="message-circle" size={24} color="#BDBDBD" />
        </ButtonText>
        <Text style={styles.amountComments}>{amountComments}</Text>
        <IconLocation style={styles.markLocation} />

        <ButtonText
          coords={coords}
          onPress={() => navigation.navigate('Map', { coords })}
        >
          {location ? (
            <Text style={styles.textLocation}>{location}</Text>
          ) : (
            <Text style={textNoLocation}>No location</Text>
          )}
        </ButtonText>
      </View>
    </View>
  );
};
export default ImageItem;
const styles = StyleSheet.create({
  imageContainer: {
    marginBottom: 32,
  },
  image: {
    height: 240,
    marginBottom: 8,

    borderRadius: 8,
  },
  textName: {
    marginBottom: 8,

    color: '#212121',

    fontFamily: 'Roboto-medium',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 19,
  },
  textNoName: {
    color: '#BDBDBD',
  },
  wrapperNavigation: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  amountComments: {
    marginRight: 49,

    color: '#BDBDBD',

    fontFamily: 'Roboto-regular',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 19,
  },
  markLocation: {
    marginRight: 4,
  },
  textLocation: {
    color: '#212121',

    fontFamily: 'Roboto-regular',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 19,
    textDecorationLine: 'underline',
  },
  textNoLocation: {
    color: '#BDBDBD',
  },
});
const textNoName = StyleSheet.compose(styles.textName, styles.textNoName);
const textNoLocation = StyleSheet.compose(
  styles.textLocation,
  styles.textNoLocation
);
