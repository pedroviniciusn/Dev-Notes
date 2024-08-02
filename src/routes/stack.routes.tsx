import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Home from '../screens/Home';

export type AppStackParamList = {
  Login: undefined;
  Home: undefined;
};
const Stack = createNativeStackNavigator<AppStackParamList>();

const StackRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: 'TODO APP',
          headerBackVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackRoutes;
