import React, { Component } from "react";
import AwesomeButton from "react-native-really-awesome-button";
import SettingsComponent from "../components/SettingsComponent";
import { StyleSheet, Text, AsyncStorage } from "react-native";

const signUpColors = {
  color: "#9d4fd1",
  backgroundColor: "#733b99"
};

class StatsDetailScreen extends Component {
  constructor() {
    super();
  }

  render() {
    return <Text>Stats Detail</Text>;
  }
}

export default StatsDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center"
  }
});
