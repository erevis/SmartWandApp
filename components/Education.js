import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import { Tutorial } from '../routes/Tutorial';
import { Articles } from '../routes/Articles';
import { Forum } from '../routes/Forum';
import { Thread } from '../routes/Thread.js';
import {COLORS} from './Colors.js';


const Stack = createNativeStackNavigator();

export function Education() {
  const ref = React.useRef(null);
  
  function Default() {
    return(
      <View style={styles.container}>  
        <TouchableOpacity style={styles.button} onPress={() => {ref.current && ref.current.navigate('Anatomy Tutorial')}}>
          <Text style={styles.text}>Anatomy Tutorial</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {ref.current && ref.current.navigate('Helpful Articles')}}>
          <Text style={styles.text}>Helpful Articles</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {ref.current && ref.current.navigate('Forum')}}>
          <Text style={styles.text}>Forum</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
      <View style={{flex:1}}>
        <NavigationContainer independent={true} ref={ref}>
          <Stack.Navigator initialRouteName="Education">
            <Stack.Screen name="Education" component={Default} 
              options={{
                headerStyle: {
                  backgroundColor: COLORS.bottom,
                },
                headerTintColor: COLORS.background,
              }}
            />
            <Stack.Screen name="Anatomy Tutorial" component={Tutorial}
              options={{
                headerStyle: {
                  backgroundColor: COLORS.bottom,
                },
                headerTintColor: COLORS.background,
              }}            
            />
            <Stack.Screen name="Helpful Articles" component={Articles}
              options={{
                headerStyle: {
                  backgroundColor: COLORS.bottom,
                },
                headerTintColor: COLORS.background,
              }}
            />
            <Stack.Screen name="Forum" component={Forum}
              options={{
                headerStyle: {
                  backgroundColor: COLORS.bottom,
                },
                headerTintColor: COLORS.background,
              }}            
            />
            <Stack.Screen name="Thread" component={Thread}
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
