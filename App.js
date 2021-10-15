import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {StyleSheet, View, Text} from 'react-native'
import { Entypo , AntDesign  } from '@expo/vector-icons';
import {Therapy} from './components/Therapy.js'
import {Education} from './components/Education.js'
import {Progress} from './components/Progress.js'


const Tab = createMaterialBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Therapy"
      activeColor="#e9cb1e"
      labelStyle={{ fontSize: 12 }}
      barStyle={{ backgroundColor: '#202c40' , paddingBottom: 0}}
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
    </Tab.Navigator>
  );
}



export default function App() {
  return (
      <NavigationContainer>
          <Tabs />
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
