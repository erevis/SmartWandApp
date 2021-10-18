import * as React from 'react';
import { StatusBar } from "expo-status-bar";
import {StyleSheet, View, Text, TextInput, Button, Image, TouchableOpacity} from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { Entypo , AntDesign , MaterialIcons } from '@expo/vector-icons';
import {Therapy} from './components/Therapy.js'
import {Education} from './components/Education.js'
import {Progress} from './components/Progress.js'
import {Account} from './components/Account.js'
import {COLORS} from './components/Colors.js'
import AuthContext from './components/AuthContext.js';
import * as SecureStore from 'expo-secure-store';

const Tab = createMaterialBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Therapy"
      activeColor="#e9cb1e"
      labelStyle={{ fontSize: 12 }}
      barStyle={{ backgroundColor: COLORS.bottom , paddingBottom: 0}}
    >
      <Tab.Screen
        name="Therapy"
        component={Therapy}
        options={{
          tabBarLabel: 'Therapy',
          tabBarIcon: ({ color }) => (
            <AntDesign name="medicinebox" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Education"
        component={Education}
        options={{
          tabBarLabel: 'Education',
          tabBarIcon: ({ color }) => (
            <AntDesign name="book" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Progress"
        component={Progress}
        options={{
          tabBarLabel: 'Progress',
          tabBarIcon: ({ color }) => (
            <Entypo name="progress-two" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="account-circle" size={24} color={color}/> 
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function SignInScreen() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { signIn } = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./assets/logo.png")} />

      <StatusBar style="auto" />

      <TextInput
        placeholder="Email"
        placeholderTextColor="#f3eed9"
        value={username}
        style={styles.input}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#f3eed9"
        value={password}
        style={styles.input}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => {}}
      >
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => signIn({ username, password })}
      >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.createButton}
        onPress={() => {}}
      >
        <Text style={styles.signupButton}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  )
  // return (
  //     <NavigationContainer>
  //         <MyStack />
  //     </NavigationContainer>
  // );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>
          {state.userToken == null ? (
            <Stack.Screen
              name="SignIn"
              component={SignInScreen}
              options={{
                // title: 'Smart Wand Companion App',
                // headerTitleStyle: {
                //   color: '#000000',
                //   fontWeight: 'bold',
                // },
                // headerStyle: {
                //   backgroundColor: '#f3eed9',
                // },
                // headerTitleAlign: 'center',
                animationTypeForReplace: state.isSignout ? 'pop' : 'push',
                headerTintColor: '#fff',
                headerShown: false,
              }}
            />
          ) : (
            <Stack.Screen
            name="Home"
            component={Tabs}
            options={{headerShown: false}}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: 'center',
  },
  input: {
    borderRadius: 25,
    width: "70%",
    height: 50,
    padding: 10,
    paddingLeft: 20,
    borderWidth: 0,
    borderColor: 'black',
    backgroundColor: '#476971',
    marginBottom: 15,
  },
  loginButton: {
    width: "70%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#ec6767",
  },
  loginText: {},
  signupButton: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  forgotButton: {
    height: 30,
  },
  forgotText: {
    fontStyle: 'italic'
  },
  image: {
    marginTop: 60,
    marginBottom: 40,
    height: 250,
    width: 250
  }
});