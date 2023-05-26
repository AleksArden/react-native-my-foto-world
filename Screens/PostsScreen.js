import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import { Feather } from '@expo/vector-icons';

const PostsScreen = ({ route }) => {
  const navigation = useNavigation();
  const [posts, setPosts] = useState([]);
  console.log('params', route.params);
  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [route.params, ...prevState]);
    }
  }, [route.params]);
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            {item.name ? (
              <Text style={styles.textName}>{item.name}</Text>
            ) : (
              <Text style={textNoName}>No name</Text>
            )}
            <View style={styles.wrapperNavigation}>
              <TouchableOpacity
                style={{ marginRight: 6 }}
                onPress={() =>
                  navigation.navigate('Comments', { image: item.image })
                }
              >
                <Feather name="message-circle" size={24} color="#BDBDBD" />
              </TouchableOpacity>
              <Text style={styles.amountComments}>0</Text>
              <Feather
                style={styles.markLocation}
                name="map-pin"
                size={24}
                color="#BDBDBD"
              />

              <TouchableOpacity
                disabled={item.coords ? false : true}
                onPress={() =>
                  navigation.navigate('Map', { coords: item.coords })
                }
              >
                {item.location ? (
                  <Text style={styles.textLocation}>{item.location}</Text>
                ) : (
                  <Text style={textNoLocation}>No location</Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};
export default PostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
  },
  imageContainer: {
    marginBottom: 32,
  },
  image: {
    height: 240,
    borderRadius: 8,
    marginBottom: 8,
  },
  textName: {
    marginBottom: 8,
    fontFamily: 'Roboto-medium',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 19,
    color: '#212121',
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
    fontFamily: 'Roboto-regular',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 19,
    color: '#BDBDBD',
  },
  markLocation: {
    marginRight: 4,
  },
  textLocation: {
    fontFamily: 'Roboto-regular',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 19,

    textDecorationLine: 'underline',
    color: '#212121',
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
