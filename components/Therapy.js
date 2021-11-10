import {StyleSheet, View, Text, TouchableOpacity, useColorScheme} from 'react-native'
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Premade } from '../routes/Premade';
import { Manual } from '../routes/Manual';
import { Discovery } from '../routes/Discovery';
import { Personal } from '../routes/Personal';
import { Soft } from '../routes/Soft';
import { Moderate } from '../routes/Moderate';
import { Firm } from '../routes/Firm';
import {COLORS} from './Colors.js';

const Stack = createNativeStackNavigator();

export function Therapy() {
  const ref = React.useRef(null);
  
  function Default() {
    return(
      <View style={styles.container}>  
        <TouchableOpacity style={styles.button} onPress={() => {ref.current && ref.current.navigate('Premade')}}>
          <Text style={styles.text}>Premade</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {ref.current && ref.current.navigate('Manual Session')}}>
          <Text style={styles.text}>Manual Session</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {ref.current && ref.current.navigate('Discovery Mode')}}>
          <Text style={styles.text}>Discovery Mode</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {ref.current && ref.current.navigate('Personal Program')}}>
          <Text style={styles.text}>Personal Program</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
      <View style={{flex:1}}>
        <NavigationContainer independent={true} ref={ref}>
          <Stack.Navigator initialRouteName="Therapy">
            <Stack.Screen name="Therapy" component={Default} 
              options={{
                headerStyle: {
                  backgroundColor: COLORS.bottom,
                },
                headerTintColor: COLORS.background,
              }}
            />
            <Stack.Screen name="Premade" component={Premade}
              options={{
                headerStyle: {
                  backgroundColor: COLORS.bottom,
                },
                headerTintColor: COLORS.background,
              }}
            />
            <Stack.Screen name="Discovery Mode" component={Discovery}
              options={{
                headerStyle: {
                  backgroundColor: COLORS.bottom,
                },
                headerTintColor: COLORS.background,
              }}
            />
            <Stack.Screen name="Personal Program" component={Personal}
              options={{
                headerStyle: {
                  backgroundColor: COLORS.bottom,
                },
                headerTintColor: COLORS.background,
              }}
            />
            <Stack.Screen name="Manual Session" component={Manual}
              options={{
                headerStyle: {
                  backgroundColor: COLORS.bottom,
                },
                headerTintColor: COLORS.background,
              }}
            />
            <Stack.Screen name="Soft" component={Soft}
              options={{
                headerStyle: {
                  backgroundColor: COLORS.bottom,
                },
                headerTintColor: COLORS.background,
              }}
            />
            <Stack.Screen name="Moderate" component={Moderate}
              options={{
                headerStyle: {
                  backgroundColor: COLORS.bottom,
                },
                headerTintColor: COLORS.background,
              }}
            />
            <Stack.Screen name="Firm" component={Firm}
              options={{
                headerStyle: {
                  backgroundColor: COLORS.bottom,
                },
                headerTintColor: COLORS.background,
              }}            
            />
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
    justifyContent: 'center',
    },
  button: {
    margin: 10,
    padding: 10,
    backgroundColor: COLORS.color4,
    borderRadius:25,
    width:'50%',
    alignItems: 'center',
    justifyContent: 'center',
  },  
  text: {
    color: COLORS.background,
  }
});


