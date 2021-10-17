import {StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native'
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



const Stack = createNativeStackNavigator();

export function Therapy() {
  const ref = React.useRef(null);
  
  function Default() {
    return(
      <View style={styles.container}>  
        <Text>Default Page</Text>
        <Button 
          title="Premade"
          color='#2196F3'
          onPress={() => {ref.current && ref.current.navigate('Premade')}}
        />
        <Button 
          title="Manual Session"
          color='#2196F3'
          onPress={() => {ref.current && ref.current.navigate('Manual Session')}}
        />
        <Button 
          title="Discovery Mode"
          color='#2196F3'
          onPress={() => {ref.current && ref.current.navigate('Discovery Mode')}}
        /> 
        <Button 
          title="Personal Program"
          color='#2196F3'
          onPress={() => {ref.current && ref.current.navigate('Personal Program')}}
        /> 
      </View>
    );
  }

  return (
      <View style={{flex:1}}>
        <NavigationContainer independent={true} ref={ref}>
          <Stack.Navigator initialRouteName="Therapy">
            <Stack.Screen name="Therapy" component={Default}/>
            <Stack.Screen name="Premade" component={Premade}/>
            <Stack.Screen name="Discovery Mode" component={Discovery}/>
            <Stack.Screen name="Personal Program" component={Personal}/>
            <Stack.Screen name="Manual Session" component={Manual}/>
            <Stack.Screen name="Soft" component={Soft}/>
            <Stack.Screen name="Moderate" component={Moderate}/>
            <Stack.Screen name="Firm" component={Firm}/>
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
  header: {
    flexDirection: "row"
  },
  label: {
    fontSize: 30,
  },  
});

function Header(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.label}>{props.name}</Text>
      <TouchableOpacity onPress={()=>{console.log("a")}}>
        <MaterialIcons name="account-circle" size={40} color="black" style={styles.account}/> 
      </TouchableOpacity>
    </View>
  );
}
