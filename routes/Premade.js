import {StyleSheet, View, Text, Button} from 'react-native'
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'



const Stack = createNativeStackNavigator();

export function Premade({navigation: {navigate}}) {

  return (
    <View style={{flex:1}}>
          <View style={styles.container}>
            <Button 
              title="Soft"
              color='#2196F3'
              onPress={() => {navigate('Soft')}}
            />
            <Button 
              title="Moderate"
              color='#2196F3'
              onPress={() => {navigate('Moderate')}}
            />
            <Button 
              title="Firm"
              color='#2196F3'
              onPress={() => {navigate('Firm')}}
            />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
