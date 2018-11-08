import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import StatPictureComponent from "../components/StatPictureComponent";
import AddPictureButton from "../components/AddPictureButton";

class AppHomeScreen extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={styles.container}>
          <AddPictureButton />
      </View>
    );
  }
}

export default AppHomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  }
});



