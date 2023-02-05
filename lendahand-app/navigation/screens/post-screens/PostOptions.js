import React, { useState } from 'react';
import { View, TextInput, KeyboardAvoidingView } from 'react-native';
import { styles, WINDOW_HEIGHT, WINDOW_WIDTH } from '../../../styles/Styles';
import { getLocation } from '../lend-screens/Map';

// geolocation
// event name
// description
// date
// type (0, 1, 2, 4)
// host

export default function PostOptions({ navigation }){
    const USER_LOCATION = getLocation();
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '-' + dd + '-' + yyyy;
    console.log(today);

    const [eventName, setEventName] = useState('');
    const [description, setDescription] = useState('');


   return (
    <KeyboardAvoidingView style="container">
        <View style={styles.inputContainer}>
        <TextInput
          placeholder="What do you need help with?"
          value={ eventName }
          onChangeText={text => setEventName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Please provide a 2-3 sentence description."
          value={description}
          onChangeText={text => setDescription(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>
    </KeyboardAvoidingView>
   );
}