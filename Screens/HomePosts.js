import React from 'react';
import { HeaderBackButton } from '@react-navigation/elements';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import Home from './Home';
import CommentsScreen from './CommentsScreen';
import MapScreen from './MapScreen';

const Post = createStackNavigator();

const HomePosts = () => {
  const navigation = useNavigation();
  return (
    <Post.Navigator
      initialRouteName="Home"
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
    >
      <Post.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <Post.Screen
        options={{
          headerTitle: 'Map',
        }}
        name="Map"
        component={MapScreen}
      />
      <Post.Screen
        options={{
          headerTitle: 'Comments',
        }}
        name="Comments"
        component={CommentsScreen}
      />
    </Post.Navigator>
  );
};
export default HomePosts;
