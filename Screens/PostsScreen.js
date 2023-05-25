import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, StyleSheet, Text } from 'react-native';

const PostsScreen = ({ route }) => {
  const [posts, setPosts] = useState([]);
  console.log('params', route.params);
  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
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
            {item.name ? <Text>{item.name}</Text> : <Text>No name</Text>}
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
});
