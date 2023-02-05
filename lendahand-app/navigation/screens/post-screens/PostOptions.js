import React, { useState } from 'react';
import { View, TextInput, KeyboardAvoidingView } from 'react-native';
import { styles, WINDOW_HEIGHT, WINDOW_WIDTH } from '../../../styles/Styles';
import { getLocation } from '../lend-screens/Map';
import DropDownPicker from 'react-native-dropdown-picker';

// geolocation
// event name
// description
// date
// type (0, 1, 2, 4) household, ederly, community, other
// host

export default function PostOptions({ navigation }){
    const USER_LOCATION = getLocation();
    const latitude = USER_LOCATION.latitude;
    const longitude = USER_LOCATION.longitude;
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '-' + dd + '-' + yyyy;
    console.log(today);

    const [eventName, setEventName] = useState('');
    const [description, setDescription] = useState('');
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Household', value: 'household'},
        {label: 'Elderly', value: 'elderly'},
        {label: 'Community', value: 'community'},
        {label: 'Other', value: 'other'}
    ]);

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
        <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        />
    </KeyboardAvoidingView>
   );
}