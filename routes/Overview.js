import {StyleSheet, View, Text } from 'react-native'
import * as React from 'react';
import {ProgressBar, Colors} from 'react-native-paper'

export function Overview() {
    return (
        <View style={styles.container}>
            <Text>Overview
              
            </Text>
            <View style={styles.progressBar}>
            <Text> Progress Bar
              
              </Text>
              <ProgressBar progress={0.65} color={Colors.blue800} />
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
    progressBar: {
      height: 20,
      width: '100%',
      backgroundColor: 'white',
      borderColor: '#000',
      borderWidth: 2,
      borderRadius: 5,
    }
  });
  