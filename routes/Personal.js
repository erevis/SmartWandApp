import {StyleSheet, View, Text} from 'react-native'
import * as React from 'react';

export function Personal() {
    return (
        <View style={styles.container}>
            <Text>Personal</Text>
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
  