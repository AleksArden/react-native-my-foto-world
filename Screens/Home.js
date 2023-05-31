import React from 'react';
import { useDispatch } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { HeaderBackButton } from '@react-navigation/elements';
import { signOutUser } from '../redux/auth/authOperations';

import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import PostsScreen from './PostsScreen';
import CreatePostsScreen from './CreatePostsScreen';
import ProfileScreen from './ProfileScreen';
import ButtonOrangeOval from '../Components/ButtonOrangeOval';

const Tab = createBottomTabNavigator();

const Home = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <Tab.Navigator
      initialRouteName="Posts"
      backBehavior="history"
      screenOptions={{
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

        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        options={{
          headerTitle: 'Posts',

          headerLeft: () => {
            return null;
          },
          headerRight: () => (
            <Feather
              name="log-out"
              size={24}
              color="#BDBDBD"
              onPress={() => dispatch(signOutUser())}
            />
          ),

          headerRightContainerStyle: {
            paddingRight: 10,
          },

          tabBarIcon: () => <Feather name="grid" size={24} color="#212121CC" />,
          tabBarIconStyle: { marginLeft: 81 },

          tabBarStyle: {
            height: 83,
            paddingTop: 9,
            paddingBottom: 34,
            borderTopColor: '#BDBDBD',
            borderTopWidth: 1,
          },
        }}
        name="Posts"
        component={PostsScreen}
      />
      <Tab.Screen
        options={{
          headerTitle: 'Create post',
          headerLeft: () => (
            <HeaderBackButton
              onPress={() => navigation.navigate('Posts')}
              backImage={() => (
                <Feather name="arrow-left" size={24} color="#212121CC" />
              )}
              style={{ marginLeft: 16 }}
            />
          ),

          unmountOnBlur: true,

          tabBarButton: () => (
            <ButtonOrangeOval
              onPress={() => navigation.navigate('CreatePosts')}
            >
              <AntDesign name="plus" size={18} color="#fff" />
            </ButtonOrangeOval>
          ),
          tabBarStyle: { display: 'none' },
        }}
        name="CreatePosts"
        component={CreatePostsScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,

          tabBarIcon: () => <Feather name="user" size={24} color="#212121CC" />,
          tabBarIconStyle: { marginRight: 81 },

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
