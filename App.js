import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, Image, } from 'react-native';
import { TabNavigator, StackNavigator, SwitchNavigator } from 'react-navigation';
import firebase from 'firebase';

// import Bluetooth from './components/bluetoothTICC2541';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
//import Blob from './components/test/blob';
import QR from './components/test/qrcode';
//import fi from './components/test/firebaseC';


/* import Loading from './components/login/Loading'
import SignUp from './components/login/SignUp'
import Login from './components/login/Login'
import Main from './components/login/Main' */

import AuthScreen from './screens/AuthScreen.js';
import WelcomeScreen from './screens/WelcomeScreen.js';
import FlightScreen from './screens/FlightScreen.js';
import MapScreen from './screens/MapScreen.js';
import TestScreen from './screens/TestScreen.js';

export default class App extends Component {

  render() {
    const MainNavigator = TabNavigator({

      // BLE: { screen: Bluetooth },
      // Test: { screen: fi },
      QR: {screen: QR },
      Auth: { screen: AuthScreen },
      Flight:
        {
          screen: StackNavigator
            ({
              Flight: { screen: FlightScreen },
              Map: { screen: MapScreen },
            })
        },
      Map: { screen: MapScreen },
    });

    return (
      <View style={styles.container}>
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

/* 
const App = SwitchNavigator(
 {
   Loading,
   SignUp,
   Login,
   Main
 },
 {
   initialRouteName: 'Loading'
 }
)
export default App */