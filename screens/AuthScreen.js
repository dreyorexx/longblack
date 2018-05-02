import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from '../components/SignUpForm';
import SignInForm from '../components/SignInForm';

export default class AuthScreen extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyBk0tCqof0-UifvQJVe4QqdaUbQ1gG82lI",
      authDomain: "tester-92342.firebaseapp.com",
      databaseURL: "https://tester-92342.firebaseio.com",
      projectId: "tester-92342",
      storageBucket: "tester-92342.appspot.com",
      messagingSenderId: "965797704230"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />

        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#87cefa',
    padding: 20,
    justifyContent: 'space-around',

  },
});
