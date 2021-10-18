import {StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native'
import * as React from 'react';
import {COLORS} from './Colors.js';


export function Account(){
    return(
        <View style={styles.container}>
            <Text>Account</Text>
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
  });
  