import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

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
