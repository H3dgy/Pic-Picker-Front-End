import React, { Component } from "react";
import AwesomeButton from "react-native-really-awesome-button";
import { 
  StyleSheet, 
  Text, 
  View,
  Button } from "react-native";

  const signUpColors = {
    color: "#9d4fd1",
    backgroundColor: "#733b99",
  }

  const logInColors = {
    color: "#9d4fd1",
    backgroundColor: "#733b99",
  }
class WelcomeScreen extends Component {
  constructor() {
    super();
  }
  render() {
    return <View style={styles.container}>
        <AwesomeButton style={styles.buttonContainer}
          onPress={() => this.props.navigation.navigate("SignIn")}
          backgroundColor={logInColors.color}
          backgroundDarker={logInColors.backgroundColor}
        >Sign in</AwesomeButton>
        <AwesomeButton style={styles.buttonContainer}
          onPress={() => this.props.navigation.navigate("SignUp")}
          backgroundColor={signUpColors.color}
          backgroundDarker={signUpColors.backgroundColor}
        >Sign up</AwesomeButton>
      </View>;
  }
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonContainer: {
    marginTop: 5,
    marginBottom: 5
  }
});
