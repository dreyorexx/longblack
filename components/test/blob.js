import React, { Component } from 'react';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob';
import * as firebase from 'firebase';

const Blob =  RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
const ROOT_URL = 'https://us-central1-fir-otp-longblack.cloudfunctions.net';

const config = {
    apiKey: "AIzaSyCwE3hbbjog48VhhSYdCyxKF0lJA3vA3Xg",
    authDomain: "inventoryapp-f69f2.firebaseapp.com",
    databaseURL: "https://inventoryapp-f69f2.firebaseio.com",
    projectId: "inventoryapp-f69f2",
    storageBucket: "",
  };
  firebase.initializeApp(config);
  var database = firebase.database();

window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob

/*
    Allows users to select an image to upload, thus invoking the Image Picker
    After selecting the image, pass the image to uploadImage func 
*/

showImagePicker((response) => {
    if(!response.didCancel){
        uploadImage(response.uri)
    }
})

export const uploadImage = ( uri, mime = 'application/octet-stream') => {
    return(dispatch) => {
        return new Promise((resolve, reject) => {
            const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
            const sessionId = new Date().getTime()
            let uploadBlob = null

            // create ref in firebase storage for file
            const imageRef = firebase.storage().ref('foldername').child('filename')
        })
    }
}


class blob extends Component {

    

    render(){
        return(
            
        );
    };

}

export const uploadImage = ( uri, mime )

export default blob;