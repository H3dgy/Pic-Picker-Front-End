import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class AppSettingsScreen extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>AppSettingsScreen</Text>
      </View>
    );
  }
}

export default AppSettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
