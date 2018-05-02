import React from 'react';
import PopupDialog from 'react-native-popup-dialog';
import { Button, View, StyleSheet, Text } from 'react-native';


export default class TestScreen extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Button
          title="Show Dialog"
          onPress={() => {
            this.popupDialog.show();
          }}
        />
        <PopupDialog
          ref={(popupDialog) => { this.popupDialog = popupDialog; }}
        >
          <View>
            <Text>Hello</Text>
          </View>
        </PopupDialog>
      </View>
    )
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
