import React from "react";
import { styles } from "./lend-screens/Styles";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ForYou from "./lend-screens/ForYou";
import Map from "./lend-screens/Map";
import { Dimensions } from "react-native";
import axios from "axios";


const eventsData = require("../../data/sample-events.json");
const eventsDict = eventsData.features;
const Tab = createMaterialTopTabNavigator();

export { eventsDict, Tab };

export default function Lend() {
  const windowHeightInt = parseInt(Dimensions.get("window").height);
  const marginHeight = windowHeightInt / 18;
  return (
    <Tab.Navigator
      initialRouteName={"For You"}
      screenOptions={{
          tabBarLabelStyle: { fontSize: 16 },
          tabBarStyle: {
              marginTop: marginHeight,
              backgroundColor: '#ededed',
          },
          tabBarIndicatorStyle: {
              backgroundColor: '#495371'
          }
      }}
    >
      <Tab.Screen name="For You" component={ForYou} />
      <Tab.Screen name="Map" component={Map} />
    </Tab.Navigator>
  );
}


// export default class Lend extends React.Component {
//   state = {
//     events: "",
//   };

//   componentDidMount() {
//     axios
//       .get("http://192.168.56.1:3000/events")
//       .then((res) => {
//         const events = res.data;
//         this.setState({ events });
//       })
//       .catch((err) => console.log(err.toJSON()));
//   }

//   render() {
//     const windowHeightInt = parseInt(Dimensions.get("window").height);
//     const marginHeight = windowHeightInt / 18;

//     // console.log(this.state.events[0]);
//     return (
//       <Tab.Navigator
//         initialRouteName={"For You"}
//         screenOptions={{
//             tabBarLabelStyle: { fontSize: 16 },
//             tabBarStyle: {
//                 marginTop: marginHeight,
//                 backgroundColor: '#ededed',
//             },
//             tabBarIndicatorStyle: {
//                 backgroundColor: '#495371'
//             }
//         }}
//       >
//         <Tab.Screen name="For You" component={ForYou} />
//         <Tab.Screen name="Map" component={Map} />
//       </Tab.Navigator>
//     );
//   }
// }
