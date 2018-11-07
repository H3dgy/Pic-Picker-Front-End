import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import AwesomeButton from "react-native-really-awesome-button";

const standardColors = {
  color: "#c5bdcc",
  backgroundColor:  "#9e95a5",
}

class AppStatsScreen extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>AppStatsScreen</Text>
      </View>
    );
  }
}

export default AppStatsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
