import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import PostsScreen from './PostsScreen';
import CreatePostsScreen from './CreatePostsScreen';
import ProfileScreen from './ProfileScreen';

import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Home = () => {
  const navigation = useNavigation();
  return (
    <Tab.Navigator initialRouteName="PostsScreen">
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
          headerRight: () => (
            <Feather
              style={styles.iconLogout}
              name="log-out"
              size={24}
              color="#BDBDBD"
              onPress={() => navigation.navigate('Login')}
            />
          ),
        }}
        name="PostsScreen"
        component={PostsScreen}
      />
      <Tab.Screen name="CreatePostsScreen" component={CreatePostsScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
export default Home;

const styles = StyleSheet.create({
  iconLogout: {
    marginRight: 10,
  },
});
