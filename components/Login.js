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

function SignInScreen() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { signIn } = React.useContext(AuthContext);

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
        value={username}
        style={styles.input}
        onChangeText={setUsername}
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
        onPress={() => signIn({ username, password })}
      >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.createButton}
        onPress={() => { }}
      >
        <Text style={styles.signupButton}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();

export default function Login() {
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
            userToken: null,
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
      let userToken;

      try {
        userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        console.log(e)
      }

      // After restoring token, we may need to validate it in production apps
      if (userToken != null) {
        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.

        // dispatch({ type: 'RESTORE_TOKEN', token: userToken });
      }
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
        
        
        let userToken;
        let userName = null;
        console.log(data)

        if (userName == null) {
          try {
            userToken = 'abc'
            SecureStore.setItemAsync('userToken', userToken)
          } catch (e) {
            console.log(e)
          }
        }

        // dispatch({ type: 'SIGN_IN', token: userToken });
      },
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        let userToken;
        let userName = null;

        if (userName == null) {
          try {
            userToken = ''
            SecureStore.setItemAsync('userToken', userToken)
          } catch (e) {
            console.log(e)
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
    backgroundColor: COLORS.color6,
    alignItems: 'center',
  },
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
    backgroundColor: COLORS.color2,
    marginBottom: 15,
    color: '#FFFFFF'
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