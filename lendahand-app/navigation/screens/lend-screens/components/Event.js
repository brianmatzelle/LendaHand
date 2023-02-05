import React, {useState} from "react";
import { StyleSheet, View, Dimensions, Image } from "react-native";
import { Avatar, Text, Button, Card } from "react-native-paper";
import { ThemedButton } from "react-native-really-awesome-button";
import { recenterTo } from "../Map";
import { eventsDict } from "../../Lend";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
const buttonWidth = windowWidth / 2.3;
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
const LeftContent = (props) => <Image style={{width: '100%', height: '100%', borderRadius: 100}} source={{uri: "https://i.pravatar.cc/"}} />

function convertDate(date_str) {
  const temp_date = date_str.split("-");
  return (
    temp_date[2] + " " + months[Number(temp_date[1]) - 1] + " " + temp_date[0]
  );
}

function noThanks() {}

function illHelp(nav) {
  nav.navigate("Map");
}

// import React, {useEffect, useState } from 'react';
// import { ActivityIndicator, FlatList, Text, View, StyleSheet } from 'react-native';

// const Event = () => {
//   const [isLoading, setLoading] = useState(true);
//   const [data, setData] = useState([]);

//   const getImage = async () => {
//     fetch('https://api.openai.com/v1/images/generations', {
//       method: 'POST',
//       body: JSON.stringify({
//         prompt: 
//       })
//     })
//   };

//   return (
//     <View style={{flex: 1, padding: 24}}>
//       {isLoading ? (
//         <ActivityIndicator />
//       ) : (
//         <FlatList
//           data={data}
//           keyExtractor={({id}) => id}
//           renderItem={({item}) => (
//             <Text>
//               {item.title}, {item.releaseYear}
//             </Text>
//           )}
//         />
//       )}
//     </View>
//   );
// };


export default function Event({ event, nav }) {
  let picurl = "https://picsum.photos/" + Math.floor(Math.random() * 1000);
  const navCopy = nav;
  
  return (
    <Card mode="contained" style={styles.card}>
      <Card.Title
        title={event.host}
        subtitle={convertDate(event.date)}
        left={LeftContent}
      />
      <Card.Content>
        <Text variant="titleMedium">{event.name}</Text>
        <Text variant="bodySmall">{event.description}</Text>
      </Card.Content>
      <Card.Cover style={styles.cardPicture} source={{ uri: picurl }} />
      <Card.Actions style={styles.buttonContainer}>
        <ThemedButton
          name="bruce"
          type="primary"
          onPress={noThanks}
          style={styles.button}
          width={buttonWidth}
          borderColor="#495371"
          backgroundColor="#495371"
          backgroundDarker="#5b668c"
        >
          No Thanks.
        </ThemedButton>

        <ThemedButton
          name="bruce"
          type="secondary"
          onPress={() => {
            recenterTo(event);
            navCopy.navigate("Map");
          }}
          style={styles.button}
          width={buttonWidth}
          borderColor="#F1E0AC"
          backgroundColor="#F1E0AC"
          backgroundDarker="#98B4AA"
          backgroundShadow="#b8ccc5"
        >
          I'll help!
        </ThemedButton>
      </Card.Actions>
    </Card>
  );
}


const styles = StyleSheet.create({
  event: {
    flex: 1,
    width: windowWidth,
    height: 30,
  },
  title: {
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "white",
    // height: 400,
  },
  cardPicture: {
    margin: 10,
  },
  button: {},
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
  buttonOutlineText: {
    color: "#495371",
    fontWeight: "700",
    fontSize: 16,
  },
});
