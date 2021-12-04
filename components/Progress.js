import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import { Overview } from '../routes/Overview';
import { Challenges } from '../routes/Challenges';
import { Achievements } from '../routes/Achievements';
import { COLORS } from './Colors';


const Stack = createNativeStackNavigator();

export function Progress() {
  const ref = React.useRef(null);
  
  function Default() {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Progress</Text>

          <View style={{ flexDirection: 'row' }}>
            <View>
              <TouchableOpacity style={styles.button} onPress={() => { ref.current && ref.current.navigate('Overview') }}>
                <Text style={styles.text}>Overview</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => { ref.current && ref.current.navigate('Challenges') }}>
                <Text style={styles.text}>Challenges</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => { ref.current && ref.current.navigate('Achievements') }}>
                <Text style={styles.text}>Achievements</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }

  return (
      <View style={{flex:1}}>
        <NavigationContainer independent={true} ref={ref}>
          <Stack.Navigator initialRouteName="Progress">
            <Stack.Screen name="Progress" component={Default}  
              options={{
                headerStyle: {
                  backgroundColor: '#586170',
                },
                headerTintColor: COLORS.background,
              }}
            />
            <Stack.Screen name="Overview" component={Overview}
              options={{
                headerStyle: {
                  backgroundColor: '#586170',
                },
                headerTintColor: COLORS.background,
              }}
            />
            <Stack.Screen name="Challenges" component={Challenges}
              options={{
                headerStyle: {
                  backgroundColor: '#586170',
                },
                headerTintColor: COLORS.background,
              }}
            />
            <Stack.Screen name="Achievements" component={Achievements}
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
    width: 160,
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
