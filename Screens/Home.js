import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { HeaderBackButton } from '@react-navigation/elements';
import PostsScreen from './PostsScreen';
import CreatePostsScreen from './CreatePostsScreen';
import ProfileScreen from './ProfileScreen';

import { Feather } from '@expo/vector-icons';

import ButtonCreatePosts from '../Components/ButtonCreatePosts';

const Tab = createBottomTabNavigator();

const Home = () => {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      initialRouteName="PostsScreen"
      backBehavior="history"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { position: 'absolute' },
      }}
    >
      <Tab.Screen
        options={{
          headerTitle: 'Posts',
          headerTitleAlign: 'center',
          headerTintColor: '#212121',
          headerTitleStyle: {
            fontFamily: 'Roboto-medium',
            fontStyle: 'normal',
            fontSize: 17,
            lineHeight: 22,
          },
          headerStyle: {
            height: 88,
            borderBottomColor: '#BDBDBD',
            borderBottomWidth: 1,
          },
          headerRightContainerStyle: {
            paddingRight: 10,
          },
          tabBarStyle: {
            height: 83,
            paddingTop: 9,
            paddingBottom: 34,
            borderTopColor: '#BDBDBD',
            borderTopWidth: 1,
          },
          headerRight: () => (
            <Feather
              name="log-out"
              size={24}
              color="#BDBDBD"
              onPress={() => navigation.navigate('Login')}
            />
          ),
          tabBarIcon: () => <Feather name="grid" size={24} color="#212121CC" />,
          tabBarIconStyle: { marginLeft: 81 },
        }}
        name="PostsScreen"
        component={PostsScreen}
      />
      <Tab.Screen
        options={{
          headerTitle: 'Create post',
          headerTitleAlign: 'center',
          headerTintColor: '#212121',
          headerTitleStyle: {
            fontFamily: 'Roboto-medium',
            fontStyle: 'normal',
            fontSize: 17,
            lineHeight: 22,
          },
          headerStyle: {
            height: 88,
            borderBottomColor: '#BDBDBD',
            borderBottomWidth: 1,
          },
          tabBarButton: () => (
            <ButtonCreatePosts
              onPress={() => navigation.navigate('CreatePostsScreen')}
            />
          ),
          tabBarStyle: { display: 'none' },
          headerLeft: () => (
            <HeaderBackButton
              onPress={() => navigation.navigate('PostsScreen')}
              backImage={() => (
                <Feather name="arrow-left" size={24} color="#212121CC" />
              )}
              style={{ marginLeft: 16 }}
            />
          ),
        }}
        name="CreatePostsScreen"
        component={CreatePostsScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <Feather name="user" size={24} color="#212121CC" />,
          tabBarIconStyle: { marginRight: 81 },
          headerShown: false,
          tabBarStyle: {
            height: 83,
            paddingTop: 9,
            paddingBottom: 34,
            borderTopColor: '#BDBDBD',
            borderTopWidth: 1,
          },
        }}
        name="ProfileScreen"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};
export default Home;
