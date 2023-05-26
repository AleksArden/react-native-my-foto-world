import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { HeaderBackButton } from '@react-navigation/elements';
import PostsScreen from './PostsScreen';
import CreatePostsScreen from './CreatePostsScreen';
import ProfileScreen from './ProfileScreen';

import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import ButtonOrangeOval from '../Components/ButtonOrangeOval';

const Tab = createBottomTabNavigator();

const Home = () => {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      initialRouteName="Posts"
      backBehavior="history"
      screenOptions={{ tabBarShowLabel: false }}
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

          headerLeft: () => {
            return null;
          },

          headerRightContainerStyle: {
            paddingRight: 10,
          },

          headerRight: () => (
            <Feather
              name="log-out"
              size={24}
              color="#BDBDBD"
              onPress={() => navigation.navigate('Login')}
            />
          ),

          tabBarStyle: {
            height: 83,
            paddingTop: 9,
            paddingBottom: 34,
            borderTopColor: '#BDBDBD',
            borderTopWidth: 1,
          },

          tabBarIcon: () => <Feather name="grid" size={24} color="#212121CC" />,
          tabBarIconStyle: { marginLeft: 81 },
        }}
        name="Posts"
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
          unmountOnBlur: true,
          headerStyle: {
            height: 88,
            borderBottomColor: '#BDBDBD',
            borderBottomWidth: 1,
          },
          tabBarButton: () => (
            <ButtonOrangeOval
              onPress={() => navigation.navigate('CreatePosts')}
            >
              <AntDesign name="plus" size={18} color="#fff" />
            </ButtonOrangeOval>
          ),

          tabBarStyle: { display: 'none' },

          headerLeft: () => (
            <HeaderBackButton
              onPress={() => navigation.navigate('Posts')}
              backImage={() => (
                <Feather name="arrow-left" size={24} color="#212121CC" />
              )}
              style={{ marginLeft: 16 }}
            />
          ),
        }}
        name="CreatePosts"
        component={CreatePostsScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <Feather name="user" size={24} color="#212121CC" />,
          tabBarIconStyle: { marginRight: 81 },
          headerShown: false,
          tabBarStyle: {
            position: 'absolute',
            height: 83,
            paddingTop: 9,
            paddingBottom: 34,
            borderTopColor: '#BDBDBD',
            borderTopWidth: 1,
          },
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};
export default Home;
