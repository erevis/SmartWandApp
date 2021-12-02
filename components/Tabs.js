import * as React from 'react';
import { Therapy } from './Therapy.js'
import { Education } from './Education.js'
import { Progress } from './Progress.js'
import { Account } from './Account.js'
import { COLORS } from './Colors.js'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Entypo, AntDesign, MaterialIcons } from '@expo/vector-icons';

export default function Tabs() {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Therapy"
      activeColor="#e9cb1e"
      labelStyle={{ fontSize: 12 }}
      barStyle={{ backgroundColor: COLORS.bottom, paddingBottom: 0 }}
    >
      <Tab.Screen
        name="Therapy"
        component={Therapy}
        options={{
          tabBarLabel: 'Therapy',
          tabBarIcon: ({ color }) => (
            <AntDesign name="medicinebox" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Education"
        component={Education}
        options={{
          tabBarLabel: 'Education',
          tabBarIcon: ({ color }) => (
            <AntDesign name="book" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Progress"
        component={Progress}
        options={{
          tabBarLabel: 'Progress',
          tabBarIcon: ({ color }) => (
            <Entypo name="progress-two" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="account-circle" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}