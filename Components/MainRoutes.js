import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';

import RegistrationScreen from '../Screens/RegistrationScreen';
import LoginScreen from '../Screens/LoginScreen';
import HomePosts from '../Screens/HomePosts';
import { selectStateChange } from '../redux/auth/authSelectors';
import { authStateChangeUser } from '../redux/auth/authOperations';

const Stack = createStackNavigator();

const MainRoutes = () => {
  const stateChange = useSelector(selectStateChange);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authStateChangeUser());
  }, []);

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      {!stateChange ? (
        <>
          <Stack.Screen name="Registration" component={RegistrationScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </>
      ) : (
        <Stack.Screen name="HomePosts" component={HomePosts} />
      )}
    </Stack.Navigator>
  );
};
export default MainRoutes;
