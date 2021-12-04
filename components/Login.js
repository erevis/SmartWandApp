import * as React from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, TextInput, Button, Image, TouchableOpacity, Animated, Dimensions, NativeModules } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { COLORS } from './Colors.js'
import AuthContext from './AuthContext.js';
import * as SecureStore from 'expo-secure-store';
import { Square1, Square2, Square3 } from './Background.js';
import Tabs from './Tabs.js'
import APIKit from '../shared/APIKit.js';
import { setClientToken } from '../shared/APIKit.js'
import axios from 'axios';

function SignInScreen() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { signIn, signUp, signOut } = React.useContext(AuthContext);

  return (
    <View style={styles.background}>
      <Square1 />
      <Square2 />
      <Square3 />

      <Image style={styles.image} source={require("../assets/logo.png")} />

      <StatusBar style="auto" />

      <TextInput
        placeholder="Email"
        placeholderTextColor={COLORS.color4}
        fontWeight='bold'
        value={email}
        style={styles.input}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor={COLORS.color4}
        fontWeight='bold'
        value={password}
        style={styles.input}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => { }}
      >
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => {
          signIn({ email, password })}
        }
      >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.createButton}
        onPress={() => signUp({ email, password })}
      >
        <Text style={styles.signupButton}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();

export default function Login() {
  let userToken = null

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
            userToken: action.token,
            isSignout: false,
            isLoading: false,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
            isLoading: false,
          };
        case 'SIGN_UP':
          return {
            ...prevState,
            userToken: action.token,
            isSignout: false,
            isLoading: false,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  )

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {

      try {
        userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        console.log(e)
      }
      
      // After restoring token, we may need to validate it in production apps
      if (userToken != null) {
        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        dispatch({ type: 'RESTORE_TOKEN', token: 'dummy-auth-token' });
      }
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        // const email = data.email;
        // const password = data.password;
        // const payload = {
        //   'email': email, 
        //   'password': password
        // }
        // let token = null;

        // try {
        //   const res = await APIKit.post('/api/token/', payload)
          
        //   if (res.status == 200) {
        //     console.log(res)
        //     const data = res.data;
        //     token = data.access
        //     try {
        //       SecureStore.setItemAsync('userToken', token)
        //     } catch (e) {
        //       console.log(e)
        //     }
        //     setClientToken(data.token);
        //   } else {
            
        //   }
        // } catch (err) {
        //   if (err.response) {
        //     // The request was made and the server responded with a status code
        //     // that falls out of the range of 2xx
        //     console.log(err.response.data);
        //     console.log(err.response.status);
        //     console.log(err.response.headers);
        //   } else if (err.request) {
        //     // The request was made but no response was received
        //     // `err.request` is an instance of XMLHttpRequest in the browser and an instance of
        //     // http.ClientRequest in node.js
        //     console.log(err.request);
        //   } else {
        //     // Something happened in setting up the request that triggered an Error
        //     console.log('Error', err.message);
        //   }
        // }
        userToken = 'abc'
        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signUp: async data => {
        const email = data.email;
        const password = data.password;
        const payload = {
          'email': email, 
          'password': password
        }

        let userToken = null

        try {
          const res = await APIKit.post('/account/api/register', payload)
          console.log(res)
          const data = res.data;

        } catch (err) {
          if (err.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
          } else if (err.request) {
            // The request was made but no response was received
            // `err.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(err.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', err.message);
          }
        }

        dispatch({ type: 'SIGN_UP', token: userToken });
      },
      signOut: () => {
        try {
          SecureStore.deleteItemAsync('userToken')
        } catch (e) {
          console.log(e)
        }

        dispatch({ type: 'SIGN_OUT' });
      }
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
              options={{ headerShown: false }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#c7cacf',
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
    backgroundColor: COLORS.color2,
    marginBottom: 15,
    color: COLORS.background
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