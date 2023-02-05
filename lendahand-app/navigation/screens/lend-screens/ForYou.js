import React from "react";
import { View, ScrollView, scrollTo } from "react-native";
import { styles } from "./Styles";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Event from "./components/Event";
import { eventsDict } from "../Lend";
import axios from "axios";

const ROW_HEIGHT = 467;

export function scrollToEvent(index) {
  this._scrollView.scrollTo({ y: index * ROW_HEIGHT });
}

export default function ForYou({ navigation }) {
  return (
      <View style={styles.container}>
        <ScrollView ref={(view) => (this._scrollView = view)}>
          {eventsDict.map((eventObj, index) => (
            <View style={styles.event} key={index}>
              <Event event={eventObj} nav={navigation} />
            </View>
          ))}
        </ScrollView>
      </View>
  );
};

// export default class ForYou extends React.Component {
//   state = {
//     events: "",
//   };
//   componentDidMount() {
//     axios
//       .get("http://149.125.139.190:3000/events")
//       .then((res) => {
//         const events = res.data;
//         this.setState({ events });
//       })
//       .catch((err) => console.log(err.toJSON()));
//   }
//   render() {
//     if (!this.state.events) {
//       return <View></View>;
//     }
//     return (
//       <View style={styles.container}>
//         <ScrollView ref={(view) => (this._scrollView = view)}>
//           {this.state.events.map(eventObj => (
//             <View style={styles.event} key={eventObj._id}>
//               <Event event={eventObj} nav={this.props.navigation} />
//             </View>
//           ))}
//         </ScrollView>
//       </View>
//     );
//   }
// }
