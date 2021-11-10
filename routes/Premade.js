import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { COLORS } from '../components/Colors';



const Stack = createNativeStackNavigator();

export function Premade({navigation: {navigate}}) {

  return (
    <View style={{flex:1}}>
      <View style={styles.container}>  
        <TouchableOpacity style={styles.button} onPress={() => {navigate('Soft')}}>
          <Text style={styles.text}>Soft</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {navigate('Moderate')}}>
          <Text style={styles.text}>Moderate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {navigate('Firm')}}>
          <Text style={styles.text}>Firm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
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
