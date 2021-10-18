import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import { Overview } from '../routes/Overview';
import { Challenges } from '../routes/Challenges';
import { Achievements } from '../routes/Achievements';
import { COLORS } from './Colors';


const Stack = createNativeStackNavigator();

export function Progress() {
  const ref = React.useRef(null);
  
  function Default() {
    return(
      <View style={styles.container}>  
        <TouchableOpacity style={styles.button} onPress={() => {ref.current && ref.current.navigate('Overview')}}>
          <Text style={styles.text}>Overview</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {ref.current && ref.current.navigate('Challenges')}}>
          <Text style={styles.text}>Challenges</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {ref.current && ref.current.navigate('Achievements')}}>
          <Text style={styles.text}>Achievements</Text>
        </TouchableOpacity> 
      </View>
    );
  }

  return (
      <View style={{flex:1}}>
        <NavigationContainer independent={true} ref={ref}>
          <Stack.Navigator initialRouteName="Progress">
            <Stack.Screen name="Progress" component={Default}/>
            <Stack.Screen name="Overview" component={Overview}/>
            <Stack.Screen name="Challenges" component={Challenges}/>
            <Stack.Screen name="Achievements" component={Achievements}/>
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
