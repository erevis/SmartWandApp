import {StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native'
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {COLORS} from './Colors.js';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Stack = createStackNavigator();

<<<<<<< HEAD
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
=======
export function Account(){
    const ref = React.useRef(null);
    
    function Default() {
        return(
          <View style={styles.container}>             
            <View style={styles.accountCard}>
              <MaterialCommunityIcons name="account-circle" size={50} color="black" />
              <Text style={styles.title}>Hi, (Name)</Text>
            </View>
            
            <TouchableOpacity style={styles.button} onPress={() => {ref.current && ref.current.navigate('Personal Info')}}>
                <Text>Personal Info</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {ref.current && ref.current.navigate('About My Device')}}>
                <Text>About My Device</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {ref.current && ref.current.navigate('Calibrate')}}>
                <Text>Calibrate</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {ref.current && ref.current.navigate('FAQ\'s')}}>
                <Text>FAQ's</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {ref.current && ref.current.navigate('Contact Us')}}>
                <Text>Contact Us</Text>
            </TouchableOpacity>
          </View>
        );
    }

    return (
        <View style={{flex:1}}>
          <NavigationContainer independent={true} ref={ref}>
            <Stack.Navigator initialRouteName="Account">
              <Stack.Screen name="Account" component={Default}
                options={{
                  headerStyle: {
                    backgroundColor: COLORS.bottom,
                  },
                  headerTintColor: COLORS.background,
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>  
>>>>>>> a21b23343655d7ac27247c6e911e25d08f96f537
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
<<<<<<< HEAD
  container: {
    flex: 1,
    backgroundColor: COLORS.background, 
    alignItems: 'center',
  },
});
=======
    container: {
      flex: 1,
      backgroundColor: COLORS.background, 
      alignItems: 'center',
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
    }, 
    accountCard: {
      flexDirection: "row",
      flexWrap:"wrap"
    },
    title: {
      fontSize:30
    } 
});
  
>>>>>>> a21b23343655d7ac27247c6e911e25d08f96f537
