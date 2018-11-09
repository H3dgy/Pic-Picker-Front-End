import React, { Component } from "react";
import AwesomeButton from "react-native-really-awesome-button";
import { 
  StyleSheet, 
  Text, 
  View,
  Button } from "react-native";
import {AppColors} from "../ColorScheme"

class WelcomeScreen extends Component {
  constructor() {
    super();
  }
  render() {
    return <View style={styles.container}>
        <AwesomeButton style={styles.buttonContainer}
          onPress={() => this.props.navigation.navigate("SignIn")}
          backgroundColor={AppColors.purpleButton.color}
          backgroundDarker={AppColors.purpleButton.backgroundColor}
        >Sign in</AwesomeButton>
        <AwesomeButton style={styles.buttonContainer}
          onPress={() => this.props.navigation.navigate("SignUp")}
          backgroundColor={AppColors.purpleButton.color}
          backgroundDarker={AppColors.purpleButton.backgroundColor}
        >Sign up</AwesomeButton>
      </View>;
  }
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.mainBackground,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonContainer: {
    marginTop: 5,
    marginBottom: 5
  }
});
