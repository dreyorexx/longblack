import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import DoneButton from 'react-native-keyboard-done-button';
import axios from 'axios';
import firebase from 'firebase';


const ROOT_URL = 'https://us-central1-fir-otp-longblack.cloudfunctions.net';

class SignInForm extends Component {
  state = { phone: '', code: '' };

  handleSubmit = async () => {
    try {
      let { data } = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, {
        phone: this.state.phone, code: this.state.code
      });

      firebase.auth().signInWithCustomToken(data.token);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior="padding"
      >
        <View>
          <View style={{ marginBottom: 10 }}>
            <FormLabel>Login Here Using Your Phone Number!</FormLabel>
            <FormInput
              value={this.state.phone}
              keyboardType='numeric'
              placeholder='E.g. 6512345678'
              onChangeText={phone => this.setState({ phone })}
            />
            <DoneButton
              title="Done!"   //not required, default value = `Done`
              style={{ backgroundColor: 'red' }}  //not required
              doneStyle={{ color: 'green' }}  //not required
            />
          </View>

          <View style={{ marginBottom: 10 }}>
            <FormInput
              value={this.state.code}
              placeholder='Enter Your Code'
              onChangeText={code => this.setState({ code })}
            />
            <DoneButton
              title="Done!"   //not required, default value = `Done`
              style={{ backgroundColor: 'red' }}  //not required
              doneStyle={{ color: 'green' }}  //not required
            />
          </View>

          <Button onPress={this.handleSubmit} title="Submit" />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default SignInForm;
