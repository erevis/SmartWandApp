import {StyleSheet, View, Text, TouchableOpacity, Linking} from 'react-native'
import * as React from 'react';
import { COLORS } from '../components/Colors';

export function Articles() {
    return (
        <View style={styles.container}>
              <TouchableOpacity style={styles.button} onPress={()=>{Linking.openURL('https://google.com')}}>
                <Text style={styles.text}>Test title 1</Text>
              </TouchableOpacity>           
            <TouchableOpacity style={styles.button} onPress={()=>{Linking.openURL('https://google.com')}}>
                <Text style={styles.text}>Test title 2</Text>
              </TouchableOpacity>        
            <TouchableOpacity style={styles.button} onPress={()=>{Linking.openURL('https://google.com')}}>
                <Text style={styles.text}>Test title 3</Text>
              </TouchableOpacity>          
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.background,
      alignItems: 'center',
      justifyContent: 'flex-start',
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
  