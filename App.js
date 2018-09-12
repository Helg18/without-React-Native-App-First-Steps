import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import FetchLocation from "./components/FetchLocation";
import UsersMap from "./components/UsersMap";

export default class App extends React.Component {
  state = {
    userLocation: null,
  };

  getUserLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          userLocation: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.0622,
            longitudeDelta: 0.0421
          }
        });
      },
      err => console.log(err)
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FetchLocation onGetLocation={this.getUserLocationHandler} />
        <UsersMap
          userLocation={this.state.userLocation}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a33a33",
    alignItems: "center",
    justifyContent: "center"
  }
});