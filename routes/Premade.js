import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { COLORS } from '../components/Colors';



const Stack = createNativeStackNavigator();

export function Premade({navigation: {navigate}}) {

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Premade Session</Text>

        <View style={{ flexDirection: 'row' }}>
          <View>
            <TouchableOpacity style={styles.button} onPress={() => { navigate('Soft') }}>
              <Text style={styles.text}>Soft</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => { navigate('Moderate') }}>
              <Text style={styles.text}>Moderate</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => { navigate('Firm') }}>
              <Text style={styles.text}>Firm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#586170',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 50,
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '85%',
    height: '95%',
    borderRadius: 45,
    borderWidth: 0,
    backgroundColor: '#9095a0',
    borderColor: COLORS.bottom,
  },
  title: {
    marginBottom: 50,
    width: '100%',
    color: COLORS.white,
    fontSize: 45,
    fontWeight: "bold",
    textAlign: 'center',
  },
  button: {
    margin: 10,
    padding: 10,
    borderRadius: 15,
    borderWidth: 0,
    borderColor: COLORS.bottom,
    width: 140,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e3e5e7'
  },
  text: {
    color: COLORS.bottom,
    fontSize: 20,
    textAlign: 'center',
  },
});
