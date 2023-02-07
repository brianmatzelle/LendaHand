import React, {useState, useEffect} from "react";
import { StyleSheet, View, Dimensions, Image } from "react-native";
import { Avatar, Text, Button, Card } from "react-native-paper";
import { ThemedButton } from "react-native-really-awesome-button";
import { recenterTo } from "../Map";
import { eventsDict } from "../../Lend";
import { Configuration, OpenAIApi } from "openai";
import config from "../../../../config";
import { useFocusEffect } from "@react-navigation/core";

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

const configuration = new Configuration({
  apiKey: config.REACT_APP_OPEN_AI_KEY,
})
const openai = new OpenAIApi(configuration);

export default function Event({ event, nav }) {
  // let picurl = "https://picsum.photos/" + Math.floor(Math.random() * 1000);
  const navCopy = nav;

  const [prompt, onChangePrompt] = React.useState(
    "Realistic " + event.host + " " + event.name
  );
  const [profPrompt, onChangeProfPrompt] = React.useState(
    event.host
  );
  const [result, setResult] = React.useState("https://furntech.org.za/wp-content/uploads/2017/05/placeholder-image-300x225.png");
  const [profResult, setProfResult] = React.useState("https://furntech.org.za/wp-content/uploads/2017/05/placeholder-image-300x225.png");
  const [loading, setLoading] = React.useState(false);
  const [imagePlaceholder, setimagePlaceholder] = React.useState(
    "https://furntech.org.za/wp-content/uploads/2017/05/placeholder-image-300x225.png"
  );

  const configuration = new Configuration({
    apiKey: config.REACT_APP_OPEN_AI_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    try {
      // onChangePrompt(`Search ${prompt}..`);
      setLoading(true);
      const res = await openai.createImage({
        prompt: prompt,
        n: 1,
        size: "256x256",
      });
      setResult(res.data.data[0].url);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const generateProf = async () => {
    try {
      onChangePrompt(`Search ${event.host}..`);
      setLoading(true);
      const res = await openai.createImage({
        prompt: event.host,
        n: 1,
        size: "256x256",
      });
      setProfResult(res.data.data[0].url);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    generateImage();
    generateProf();
  }, [])

  const LeftContentAI = (props) => 
    <Image style={{width: '100%', height: '100%', borderRadius: 100}} source={{uri: profResult}} />

  
  return (
    <Card mode="contained" style={styles.card}>
      <Card.Title
        title={event.host}
        subtitle={convertDate(event.date)}
        left={LeftContentAI}
      />
      <Card.Content>
        <Text variant="titleMedium">{event.name}</Text>
        <Text variant="bodySmall">{event.description}</Text>
      </Card.Content>

      <Card.Cover style={styles.cardPicture} source={{ uri: result }} />
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
    width: 360,
    height: 360,
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



// import {
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
//   Image,
//   ActivityIndicator,
// } from "react-native";
// import React from "react";
// import { Configuration, OpenAIApi } from "openai";
// import config from "../../../../config";

// export default function Event() {
//   const [prompt, onChangePrompt] = React.useState(
//     "Cthulu, intricate sand sculpture, high detail,UHD"
//   );
//   const [result, setResult] = React.useState("");
//   const [loading, setLoading] = React.useState(false);
//   const [imagePlaceholder, setimagePlaceholder] = React.useState(
//     "https://furntech.org.za/wp-content/uploads/2017/05/placeholder-image-300x225.png"
//   );

//   const configuration = new Configuration({
//     apiKey: config.REACT_APP_OPEN_AI_KEY,
//   });

//   const openai = new OpenAIApi(configuration);

//   const generateImage = async () => {
//     try {
//       onChangePrompt(`Search ${prompt}..`);
//       setLoading(true);
//       const res = await openai.createImage({
//         prompt: prompt,
//         n: 1,
//         size: "256x256",
//       });
//       setResult(res.data.data[0].url);
//     } catch (e) {
//       console.error(e);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <SafeAreaView>
//       <View style={styles.container}>
//         <Text style={styles.titleText}>React Native Dalle-E</Text>
//         <View style={styles.TextInputcontainer}>
//           <TextInput
//             style={styles.textInput}
//             onChangeText={onChangePrompt}
//             value={prompt}
//             editable
//             multiline
//             numberOfLines={4}
//           />
//         </View>
//         <TouchableOpacity style={styles.generateButton} onPress={generateImage}>
//           <Text style={styles.generateButtonText}>Generate</Text>
//         </TouchableOpacity>
//         {loading ? (
//           <>
//             <View style={styles.loadingContainer}>
//               <ActivityIndicator size="large" color="#0000ff" />
//               <Text>Generating...</Text>
//             </View>
//           </>
//         ) : (
//           <></>
//         )}

//         <View style={styles.generatedImageContainer}>
//           {result.length > 0 ? (
//             <Image
//               style={styles.generatedImage}
//               source={{
//                 uri: result,
//               }}
//             />
//           ) : (
//             <>
//               <Image
//                 style={styles.generatedImage}
//                 source={{
//                   uri: imagePlaceholder,
//                 }}
//               />
//             </>
//           )}
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingHorizontal: 10,
//   },
//   loadingContainer: {
//     paddingHorizontal: 10,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   titleText: {
//     fontSize: 20,
//     fontWeight: "bold",
//     fontFamily: "Cochin",
//     textAlign: "center",
//   },

//   TextInputcontainer: {
//     height: 100,
//     backgroundColor: "#c7c7c7",
//     borderWidth: 2,
//     borderColor: "black",
//     borderRadius: 10,
//     marginVertical: 10,
//   },
//   textInput: {
//     width: "100%",
//     height: "100%",
//     padding: 10,
//   },
//   generateButton: {
//     height: 50,
//     width: "100%",
//     backgroundColor: "black",
//     borderRadius: 10,
//     marginVertical: 10,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   generateButtonText: {
//     color: "white",
//   },
//   generatedImageContainer: {
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 10,
//   },
//   generatedImage: {
//     width: 300,
//     height: 300,
//     resizeMode: "contain",
//   },
// });