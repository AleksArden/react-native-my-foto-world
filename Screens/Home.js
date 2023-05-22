import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostsScreen from './PostsScreen';
import CreatePostsScreen from './CreatePostsScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator initialRouteName="PostsScreen">
      <Tab.Screen name="PostsScreen" component={PostsScreen} />
      <Tab.Screen name="CreatePostsScreen" component={CreatePostsScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
export default Home;
