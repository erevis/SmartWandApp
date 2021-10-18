import {StyleSheet, View, Text } from 'react-native'
import * as React from 'react';
import {ProgressBar, Colors} from 'react-native-paper'
import { CurrentRenderContext } from '@react-navigation/core';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function Overview() {
    return (
      <>
      <View style={styles.container}>
        <Text>Progress</Text>
        </View>
        <View style={styles.container}>
            <Text style={styles.containerTitle}>Progress Overview</Text>
            <TouchableOpacity style={styles.card}>
                <View style={styles.progressBar}>
                    <Text> Exercise 1 </Text>
                    <ProgressBar progress={0.65} color={Colors.blue800} />
                    <Text> 65% Complete </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
                <View style={styles.progressBar}>
                <Text> Exercise 2 </Text>
                    <ProgressBar progress={0.35} color={Colors.blue800} />
                    <Text> 35% Complete </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
                <View style={styles.progressBar}>
                <Text> Exercise 3 </Text>
                    <ProgressBar progress={0.85} color={Colors.blue800} />
                    <Text> 85% Complete </Text>
                </View>
            </TouchableOpacity>
        </View>
        </>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    containerTitle: {
      position: 'absolute',
    },
    progressBar: {
      height: 20,
      width: '100%',
      backgroundColor: 'white',
      borderColor: '#000',
      borderWidth: 2,
      borderRadius: 5,
    },
    cards: {
      //display: 'flex',
      alignItems: 'center',
      maxWidth: '150px',
      width: '96%',
      marginBottom: 10,
      marginLeft: '2%',
      shadowColor: '#000',
      shadowOpacity: 1,
      shadowOffset: {
        width: 3,
        height: 3
      }
    }
  });