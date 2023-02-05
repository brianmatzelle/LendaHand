import React from 'react';
import MapView from 'react-native-maps';
import { View } from 'react-native';
import { styles } from './Styles';

export default function Map() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  );
}