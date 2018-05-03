import * as firebase from 'firebase';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, Image, } from 'react-native';
import { TabNavigator, StackNavigator, SwitchNavigator } from 'react-navigation';

const config = {
    apiKey: "AIzaSyAIbezdQjw0X9BYJgyHVMjAd4t4qFPhzts",
    authDomain: "fir-otp-longblack.firebaseapp.com",
    databaseURL: "https://fir-otp-longblack.firebaseio.com",
    storageBucket: "fir-otp-longblack.appspot.com",
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

const styles = require('./styles.js')
class GroceryApp extends Component {
    render(){
        return(
            <View style="{styles.container}">

            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        backgroundColor: '#f2f2f2',
        flex: 1,
    },
})