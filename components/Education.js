import {StyleSheet, View, Text, Button} from 'react-native'
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import { Tutorial } from '../routes/Tutorial';
import { Articles } from '../routes/Articles';
import { Forum } from '../routes/Forum';


const Stack = createNativeStackNavigator();

export function Education() {
  const ref = React.useRef(null);
  
  function Default() {
    return(
      <View style={styles.container}>  
        <Text>Default Page</Text>
        <Button 
          title="Anatomy Tutorial"
          color='#2196F3'
          onPress={() => {ref.current && ref.current.navigate('Anatomy Tutorial')}}
        />
        <Button 
          title="Helpful Articles"
          color='#2196F3'
          onPress={() => {ref.current && ref.current.navigate('Helpful Articles')}}
        />
        <Button 
          title="Forum"
          color='#2196F3'
          onPress={() => {ref.current && ref.current.navigate('Forum')}}
        /> 
        </View>
    );
  }

  return (
      <View style={{flex:1}}>
        <NavigationContainer independent={true} ref={ref}>
          <Stack.Navigator initialRouteName="Education">
            <Stack.Screen name="Education" component={Default}/>
            <Stack.Screen name="Anatomy Tutorial" component={Tutorial}/>
            <Stack.Screen name="Helpful Articles" component={Articles}/>
            <Stack.Screen name="Forum" component={Forum}/>
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
