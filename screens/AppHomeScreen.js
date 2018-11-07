import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import CreditHearthComponent from "../components/CreditHearthComponent";

class AppHomeScreen extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
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
