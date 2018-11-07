import React, { Component } from "react";
import AwesomeButton from "react-native-really-awesome-button";
import SettingsComponent from "../components/SettingsComponent";
import { StyleSheet, Text, View, Button, AsyncStorage } from "react-native";

const signUpColors = {
  color: "#9d4fd1",
  backgroundColor: "#733b99"
};

class SignUpScreen extends Component {
  constructor() {
    super();
  }

  signUp = async () => {
    await AsyncStorage.setItem("userToken", "Frederik");
    this.props.navigation.navigate("App");
  };

  render() {
    return (
      <View style={styles.container}>
        <SettingsComponent />
        <AwesomeButton
          style={styles.buttonContainer}
          onPress={this.signUp}
          backgroundColor={signUpColors.color}
          backgroundDarker={signUpColors.backgroundColor}
        >
          Let's go!
        </AwesomeButton>
      </View>
    );
  }
}

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center"
  }
});
