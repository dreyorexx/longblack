import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-fir-otp-longblack.cloudfunctions.net';

// Axios is used to make network requests instead of fetch

class SignUpForm extends Component {

  /*
  Note: With ES7, this piece of code:

  constructor(props){
    super(props);

    this.state = { phone: '' };
  }

  can be replaced with

  state = { phone: '' };

  automatically.

  Also, I've saved the data type of phone as String instead of Integer as React Native
  automatically takes in & returns String for Form Input
  */

  state = { phone: '' };

  /*
  With ES7, instead of the usual handleSubmit(){}, and then type
  this.handleSubmit.bind(this), using the arrow func, there's no need
  to bind the context of the callback anymore:

  handleSubmit = () => {

  }
  */

  handleSubmit = async () => {
    try {
      //async await
      //await: Tells bable to treat the func differently- after the line of code is executed, it'll return a promise
      //bable will look at the returned promise & not execute the next line of code until resolved

      await axios.post(`${ROOT_URL}/createUser`, { phone: this.state.phone })
      await axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone: this.state.phone })
      }
    // Handles failed network requests

    catch(err) {
      console.log(err);
      // this.setState({ error: 'Something went wrong' });
    }

  }

  /*
  handleSubmit = () => {

    axios.post(`${ROOT_URL}/createUser`, {
      phone: this.state.phone
    })
      .then(() => {
        axios.post(`${ROOT_URL}/requestOneTimePassword`, {
          phone: this.state.phone
        })
      })

  }
  */

  render(){


    return (
      <View>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Sign Up Here Using Your Phone Number!</FormLabel>
          <FormInput
            value={this.state.phone}
            keyboardType='numeric'
            placeholder='E.g. 6512345678'
            onChangeText = {phone => this.setState({phone})}

          />
        </View>

        <Button onPress={this.handleSubmit.bind(this)} title="Submit" />
      </View>
    )
  }
}

export default SignUpForm;
