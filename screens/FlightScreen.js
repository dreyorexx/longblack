import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button, Divider } from 'react-native-elements';
import {
  StackNavigator,
} from 'react-navigation';

import Deck from './Deck';

const DATA = [
  { id: 1, textName: '26 May 2018', uriMap: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg'},
  { id: 2, textName: 'Card #2', uriMap: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  // { id: 3, textName: 'Card #3', uriMap: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  // { id: 4, textName: 'Card #4', uriMap: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  // { id: 5, textName: 'Card #5', uriMap: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  // { id: 6, textName: 'Card #6', uriMap: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  // { id: 7, textName: 'Card #7', uriMap: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  // { id: 8, textName: 'Card #8', uriMap: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
];

export default class FlightScreen extends React.Component {

  renderCard(item){
    return (      
      <Card
        key ={item.id}
        image={{ uri: item.uriMap }}
        title={item.textName}
        >
       
          <Text style={{ marginBottom: 10 }}>
            Name: John Appleseed
          </Text>
          <Divider style={{backgroundColor: 'blue'}} />

          <Text style={{ marginBottom: 10, marginTop: 10 }}>
            Date of Departure: 26 May 2018, Saturday
          </Text>
          <Divider style={{backgroundColor: 'blue'}} />

          <Text style={{ marginBottom: 10, marginTop: 10  }}>
            Time of Departure: 9:15pm
          </Text>
          <Divider style={{backgroundColor: 'blue'}} />

          <Text style={{ marginBottom: 10, marginTop: 10  }}>
            Departure Hall: Changi Airport, Terminal 3
          </Text>
          <Divider style={{backgroundColor: 'blue'}} />

          
          <Text style={{ marginBottom: 10, marginTop: 10  }}>
            Date of Arrival: 27 May, Sunday
          </Text>
          <Divider style={{backgroundColor: 'blue'}} />

          <Text style={{ marginBottom: 10, marginTop: 10  }}>
            Time of Arrival: 10:50am
          </Text>
          <Divider style={{backgroundColor: 'blue'}} />

          <Text style={{ marginBottom: 10, marginTop: 10  }}>
            Arrival Hall: Auckland International Terminal
          </Text>
          <Divider style={{backgroundColor: 'blue'}} />

          <Text style={{ marginBottom: 10, marginTop: 10  }}>
            Flight Path: Singapore -> Auckland
          </Text>
          <Divider style={{backgroundColor: 'blue'}} />

          <Text style={{ marginBottom: 10, marginTop: 10  }}>
            Flight Number: NZ3285
          </Text>
          <Divider style={{backgroundColor: 'blue'}} />
           
          <Text style={{ marginBottom: 10, marginTop: 10  }}>
            Booking Class: Economy
          </Text>

         

      </Card>
    );
  }

  renderNoMoreCards(){
    return (
      <Card title = "Return to home?">
        <Text style= {{marginBottom: 10}}>
          You don't have any upcoming flights! Come back when you do!
        </Text>
        
        <Button
          backgroundColor="#03A9F4"
          title="Refresh?"
          onPress={() => {
            navigation.navigate("Maps");
          }
        }
        />
      </Card>
    )
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Deck
          data = {DATA}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        />
         <Button
            icon={{ name: 'code'}}
            backgroundColor="#03A9F4"
            title="View Location!"
            onPress={() =>
              navigate('Map')
            }
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
