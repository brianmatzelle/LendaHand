import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, AnimatedRegion, Animated } from 'react-native-maps';
import { styles } from './Styles';
import * as Location from 'expo-location';
import { eventsDict } from '../Lend';
import { scrollToEvent } from './ForYou';

const imageSrc = require('./assets/current-location.png');
const personMarkerSrc = require('./assets/person-location.png');
const redMarkerSrc = require('./assets/3d-marker.png');

const BINGHAMTON_COORDS = {
  latitude: 42.0894,
  longitude: -75.9695,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};
function getLocation() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  if (location !=  null) {
    const USER_LOCATION = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.03,
      longitudeDelta: 0.02,
    };
    // return USER_LOCATION;
  }
  return BINGHAMTON_COORDS;
}

// export function recenterTo(event) {
//   this.ref.region = {
//     latitude: event.latitude,
//     longitude: event.longitude,
//     latitudeDelta: 0.03,
//     longitudeDelta: 0.02,
//   }
// }

export function recenterTo(event) {
    newLocation.latitude = event.latitude,
    newLocation.longitude = event.longitude
}


export default function Map({ navigation }) {
  const USER_LOCATION = getLocation();
  const newLocation = getLocation();
  const navCopy = navigation;
  return (
    <View style={styles.container}>
      <MapView 
      ref={ref => {this.map = ref}}
      initialRegion={USER_LOCATION}
      region={newLocation}
      provider={PROVIDER_GOOGLE}
      style={styles.map} 
      >
        <Marker
        title="Current location"
        key={1}
        image={imageSrc}
        coordinate={{
          latitude: USER_LOCATION.latitude,
          longitude: USER_LOCATION.longitude,
        }}
        />
        { eventsDict.map((eventObj, index) => (
            <View style={styles.event} key={index}>
                <Marker
                title={eventObj.name}
                key={index}
                image={personMarkerSrc}
                coordinate={{
                  latitude: eventObj.x_loc,
                  longitude: eventObj.y_loc,
                }}
                onPress={() => {
                  navCopy.navigate("For You");
                  scrollToEvent(index);
                }}
                />
            </View>
        ))}
      </MapView>
    </View>
  );
}