import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import CardSwiper from "../components/CardSwiper";

class AppHomeScreen extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
          <CardSwiper />
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




