import React, { useState, useEffect, useRef } from 'react';
import { View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, AnimatedRegion, Animated, animateToRegion } from 'react-native-maps';
import { styles } from './Styles';
import * as Location from 'expo-location';
import { eventsDict } from '../Lend';
import { scrollToEvent } from './ForYou';

const imageSrc = require('./assets/current-location.png');
const personMarkerSrc = require('./assets/person-location.png');
const redMarkerSrc = require('./assets/3d-marker.png');
const mapRef = React.createRef();

export function getLocation() {
  const BINGHAMTON_COORDS = {
    latitude: 42.0894,
    longitude: -75.9695,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
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
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    };
    // return USER_LOCATION;
  }
  return BINGHAMTON_COORDS;
}

let newLocation = {
  latitude: 0,
  longitude: 0,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01
}

export function recenterTo(event) {
  newLocation = {
    latitude: event.x_loc,
    longitude: event.y_loc,
    latitudeDelta: 0.01,
    ngitudeDelta: 0.01
  };
  mapRef.current.animateToRegion(newLocation)
}

export default function Map({ navigation }) {
  const USER_LOCATION = getLocation();
  const navCopy = navigation;
  newLocation = USER_LOCATION;
  return (
    <View style={styles.container}>
      <MapView 
      ref={mapRef}
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