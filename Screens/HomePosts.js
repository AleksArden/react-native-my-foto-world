import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Post = createStackNavigator();

const HomePosts = () => {
  return (
    <Post.Navigator>
      <Post.Screen name="PostsScreen" component={PostsScreen} />
      <Post.Screen name="MapScreen" component={MapScreen} />
      <Post.Screen name="CommentsScreen" component={CommentsScreen} />
    </Post.Navigator>
  );
};
