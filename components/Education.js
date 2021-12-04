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
      <View style={styles.card}>
          <Text style={styles.title}>Education</Text>

          <View style={{flexDirection: 'row'}}>
            <View>
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
          </View>
          </View>
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
                  backgroundColor:'#586170',
                },
                headerTintColor: COLORS.background,
              }}
            />
            <Stack.Screen name="Anatomy Tutorial" component={Tutorial}
              options={{
                headerStyle: {
                  backgroundColor: '#586170',
                },
                headerTintColor: COLORS.background,
              }}            
            />
            <Stack.Screen name="Helpful Articles" component={Articles}
              options={{
                headerStyle: {
                  backgroundColor: '#586170',
                },
                headerTintColor: COLORS.background,
              }}
            />
            <Stack.Screen name="Forum" component={Forum}
              options={{
                headerStyle: {
                  backgroundColor: '#586170',
                },
                headerTintColor: COLORS.background,
              }}            
            />
            <Stack.Screen name="Thread" component={Thread}
              options={{
                headerStyle: {
                  backgroundColor:'#586170',
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
    backgroundColor: '#586170',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 50,
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '85%',
    height: '95%',
    borderRadius: 45,
    borderWidth: 0,
    backgroundColor: '#9095a0',
    borderColor: COLORS.bottom,
  },
  button: {
    margin: 10,
    padding: 10,
    borderRadius: 15,
    borderWidth: 0,
    borderColor: COLORS.bottom,
    width: 140,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e3e5e7'
  },
  text: {
    color: COLORS.bottom,
    fontSize: 20,
    textAlign: 'center',
  },
  title: {
    marginBottom: 50,
    width: '100%',
    color: COLORS.white,
    fontSize: 45,
    fontWeight: "bold",
    textAlign: 'center',
  }
});
