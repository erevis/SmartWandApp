import {StyleSheet, View, Text, TouchableOpacity, Linking} from 'react-native'
import * as React from 'react';

export function Articles() {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
              <TouchableOpacity onPress={()=>{Linking.openURL('https://google.com')}}>
                <Text style={styles.title}>Test title 1</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.card}>
            <TouchableOpacity onPress={()=>{Linking.openURL('https://google.com')}}>
                <Text style={styles.title}>Test title 2</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.card}>
            <TouchableOpacity onPress={()=>{Linking.openURL('https://google.com')}}>
                <Text style={styles.title}>Test title 3</Text>
              </TouchableOpacity>
            </View>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    card: {
      width: "90%",
      margin: 10,
      padding:10,
      backgroundColor: '#eb4034',
      borderRadius: 10
    },
    title: {
      fontSize:24,
    },
  });
  