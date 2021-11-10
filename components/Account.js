import {StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native'
import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {COLORS} from './Colors.js';

const Stack = createStackNavigator();

export function Account() {
  const ref = React.useRef(null);

  /* <Stack.Screen
  name="Home"
  component={Tabs}
  options={{headerShown: false}}
  /> */
  
  function Default() {
      return(
        <View style={styles.container}>  
          <Text>Default Page</Text>
            <TouchableOpacity style={styles.button} onPress={() => {ref.current && ref.current.navigate('Premade')}}>
                <Text>Premade</Text>
            </TouchableOpacity>
        </View>
      );
  }

  return (
    <View style={{flex:1}}>
      <NavigationContainer independent={true} ref={ref}>
        <Stack.Navigator initialRouteName="Therapy">
          <Stack.Screen name="Therapy" component={Default}/>
        </Stack.Navigator>
      </NavigationContainer>  
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background, 
    alignItems: 'center',
  },
});