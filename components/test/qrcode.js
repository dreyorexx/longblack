import QRCode from 'react-native-qrcode-svg';
import React, { Component } from 'react';
import firebase from 'firebase';

class qrcode extends Component { 
    getDataURL() {
        this.svg.toDataURL(this.callback);
    }
    callback(dataURL) {
        console.log(dataURL);
    }


    render() {
        return (
            <QRCode
            value="test"
            getRef={(c) => (this.svg = c)}
            />
        );
    };
}

export default qrcode;