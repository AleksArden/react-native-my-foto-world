import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { doc, onSnapshot, collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';

import ImageItem from '../Components/ImageItem';

const PostsScreen = () => {
  const [posts, setPosts] = useState([]);

  const getAllPosts = () => {
    onSnapshot(collection(db, 'posts'), (data) => {
      setPosts(data.docs.map((doc) => ({ ...doc.data(), postId: doc.id })));
    });
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.postId}
        renderItem={({ item }) => <ImageItem post={item} />}
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
});
