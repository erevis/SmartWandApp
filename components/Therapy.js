import { StyleSheet, View, Text, TouchableOpacity, useColorScheme } from 'react-native'
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { Premade } from '../routes/Premade';
import { Manual } from '../routes/Manual';
import { Discovery } from '../routes/Discovery';
import { Personal } from '../routes/Personal';
import { Soft } from '../routes/Soft';
import { Moderate } from '../routes/Moderate';
import { Firm } from '../routes/Firm';
import { COLORS } from './Colors.js';

const Stack = createNativeStackNavigator();

export function Therapy() {
  const ref = React.useRef(null);

  function Default() {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>What type of session would you like to perform?</Text>

          <View style={{flexDirection: 'row'}}>
            <View>
              <TouchableOpacity style={styles.button} onPress={() => { ref.current && ref.current.navigate('Premade') }}>
                <Text style={styles.text}>Premade</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => { ref.current && ref.current.navigate('Manual Session') }}>
                <Text style={styles.text}>Manual Session</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.button} onPress={() => { ref.current && ref.current.navigate('Discovery Mode') }}>
                <Text style={styles.text}>Discovery Mode</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => { ref.current && ref.current.navigate('Personal Program') }}>
                <Text style={styles.text}>Personal Program</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer independent={true} ref={ref}>
        <Stack.Navigator initialRouteName="Therapy">
          <Stack.Screen name="Therapy" component={Default}
            options={{
              headerStyle: {
                backgroundColor: '#586170',
              },
              headerTitleStyle: {
                fontSize: 20,
              },
              headerTitleAlign:"center",
              headerShown: false,
              headerTintColor: COLORS.background
            }}
          />
          <Stack.Screen name="Premade" component={Premade}
            options={{
              headerStyle: {
                backgroundColor: '#586170',
              },
              headerTintColor: COLORS.background,
            }}
          />
          <Stack.Screen name="Discovery Mode" component={Discovery}
            options={{
              headerStyle: {
                backgroundColor: '#586170',
              },
              headerTintColor: COLORS.background,
            }}
          />
          <Stack.Screen name="Personal Program" component={Personal}
            options={{
              headerStyle: {
                backgroundColor: '#586170',
              },
              headerTintColor: COLORS.background,
            }}
          />
          <Stack.Screen name="Manual Session" component={Manual}
            options={{
              headerStyle: {
                backgroundColor: '#586170',
              },
              headerTintColor: COLORS.background,
            }}
          />
          <Stack.Screen name="Soft" component={Soft}
            options={{
              headerStyle: {
                backgroundColor: '#586170',
              },
              headerTintColor: COLORS.background,
            }}
          />
          <Stack.Screen name="Moderate" component={Moderate}
            options={{
              headerStyle: {
                backgroundColor: '#586170',
              },
              headerTintColor: COLORS.background,
            }}
          />
          <Stack.Screen name="Firm" component={Firm}
            options={{
              headerStyle: {
                backgroundColor: '#586170',
              },
              headerTintColor: COLORS.background,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
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
  title: {
    marginBottom: 50,
    width: '100%',
    color: COLORS.white,
    fontSize: 45,
    fontWeight: "bold",
    textAlign: 'center',
  }
});


