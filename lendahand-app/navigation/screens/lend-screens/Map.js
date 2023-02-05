import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { styles } from './Styles';
import * as Location from 'expo-location';
import { eventsDict } from '../Lend';

const imageSrc = require('./assets/current-location.png');
const personMarkerSrc = require('./assets/person-location.png')
function getLocation() {
  const BINGHAMTON_COORDS = {
    latitude: 42.0894,
    longitude: -75.9695,
    latitudeDelta: 0.07,
    longitudeDelta: 0.03,
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
      latitudeDelta: 0.03,
      longitudeDelta: 0.02,
    };
    return USER_LOCATION;
  }
  return BINGHAMTON_COORDS;
}

export default function Map() {
  // console.log(text);

  const USER_LOCATION = getLocation();

  return (
    <View style={styles.container}>
      <MapView 
      initialRegion={USER_LOCATION}
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
        { eventsDict.map(eventObj => (
            <View style={styles.event} key={eventObj.x_loc}>
                <Marker
                title={eventObj.name}
                key={eventObj.x_loc}
                // image={personMarkerSrc}
                coordinate={{
                  latitude: eventObj.x_loc,
                  longitude: eventObj.y_loc,
                }}
                />
            </View>
        ))}
      </MapView>
    </View>
  );
}