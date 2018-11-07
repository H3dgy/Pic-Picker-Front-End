import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class AppHomeScreen extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>AppHomeScreen</Text>
      </View>
    );
  }
}

export default AppHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
