import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { COLORS } from './Colors.js';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Login from './Login.js'

const Stack = createStackNavigator();

export function Account() {
  const ref = React.useRef(null);

  function Default() {
    return (
      <View style={styles.container}>
        <View style={styles.accountCard}>
          <MaterialCommunityIcons name="account-circle" size={50} color="black" />
          <Text style={styles.title}>Hi, (Name)</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => { ref.current && ref.current.navigate('Personal Info') }}>
          <Text>Personal Info</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => { ref.current && ref.current.navigate('About My Device') }}>
          <Text>About My Device</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => { ref.current && ref.current.navigate('Calibrate') }}>
          <Text>Calibrate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => { ref.current && ref.current.navigate('FAQ\'s') }}>
          <Text>FAQ's</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => { ref.current && ref.current.navigate('Contact Us') }}>
          <Text>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {DevSettings.reload() }}>
          <Text>Log Out</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer independent={true} ref={ref}>
        <Stack.Navigator initialRouteName="Account">
          <Stack.Screen name="Account" component={Default}
            options={{
              headerStyle: {
                backgroundColor: COLORS.bottom,
              },
              headerTintColor: COLORS.background,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: 'center',
  },
  button: {
    margin: 10,
    padding: 10,
    backgroundColor: COLORS.color4,
    borderRadius: 25,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: COLORS.background,
  },
  accountCard: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  title: {
    fontSize: 30
  }
});

