import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { MapView } from 'expo';
// import { Marker } from 'react-native-maps';

export default class MapScreen extends React.Component {

  state = {
    mapLoaded: false,
    region: {
      latitude: 127.78825,
      longitude: 103.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
  }

  componentDidMount(){
    this.setState({ mapLoaded: true });
  }

  onRegionChangeComplete = (region) => {
    this.setState({ region });
  }

  render() {
    if (!this.state.mapLoaded){
      return (
        <View style = {{ flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size ="large" />
        </View>
      );
    }

    return (
      <View style={{flex: 1}}>



        <MapView
          region = {this.state.region}
          style = {{ flex: 1 }}
          onRegionChangeComplete = {this.onRegionChangeComplete}
        />

        {/* <MapView
          region={this.state.region}
          onRegionChange={this.onRegionChange}
        >
          {this.state.markers.map(marker => (
            <Marker
              coordinate={marker.latlng}
              title={marker.title}
              description={marker.description}
            />
          ))}
        </MapView> */}


      </View>
    );
  }
}
