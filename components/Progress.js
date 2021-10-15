import {StyleSheet, View, Text, Button} from 'react-native'
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import { Overview } from '../routes/Overview';
import { Challenges } from '../routes/Challenges';
import { Achievements } from '../routes/Achievements';


const Stack = createNativeStackNavigator();

export function Progress() {
  const ref = React.useRef(null);
  
  function Default() {
    return(
      <View style={styles.container}>  
        <Text>Default Page</Text>
        <Button 
          title="Overview"
          color='#2196F3'
          onPress={() => {ref.current && ref.current.navigate('Overview')}}
        />
        <Button 
          title="Challenges"
          color='#2196F3'
          onPress={() => {ref.current && ref.current.navigate('Challenges')}}
        />
        <Button 
          title="Achievements"
          color='#2196F3'
          onPress={() => {ref.current && ref.current.navigate('Achievements')}}
        /> 
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
