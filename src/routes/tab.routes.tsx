import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Todos from '../screens/To-dos';
import CompletedToDos from '../screens/Completed-to-dos';

export type AppTabParamList = {
  'to-dos': undefined;
  'completed-to-dos': undefined;
};

const Tab = createMaterialBottomTabNavigator<AppTabParamList>();

const TabBarIconToDos = ({color}: {color: any}) => (
  <MaterialCommunityIcons name="format-list-bulleted" color={color} size={26} />
);

const TabBarIconCompletedToDos = ({color}: {color: any}) => (
  <MaterialCommunityIcons name="check-all" color={color} size={26} />
);

const TabRoutes = () => {
  return (
    <Tab.Navigator initialRouteName="to-dos">
      <Tab.Screen
        name="to-dos"
        component={Todos}
        options={{
          title: 'Todos',
          tabBarLabel: 'All',
          tabBarIcon: TabBarIconToDos,
        }}
      />
      <Tab.Screen
        name="completed-to-dos"
        component={CompletedToDos}
        options={{
          title: 'Completed To-Dos',
          tabBarLabel: 'Completed',
          tabBarIcon: TabBarIconCompletedToDos,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
