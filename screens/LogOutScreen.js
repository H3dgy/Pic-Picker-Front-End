import React, { Component } from "react";
import AwesomeButton from "react-native-really-awesome-button";
import { StyleSheet, Text, View, Button, AsyncStorage } from "react-native";

const logOutColors = {
  color: "#de1c24",
  backgroundColor: "#9B1319"
};

class LogOutScreen extends Component {
  constructor() {
    super();
  }

  logOut = async () => {
    await AsyncStorage.removeItem("userToken");
    console.log(this.props.navigation);
    this.props.navigation.navigate("Auth");
  };

  render() {
    return (
      <View style={styles.container}>
        <AwesomeButton
          onPress={this.logOut}
          backgroundColor={logOutColors.color}
          backgroundDarker={logOutColors.backgroundColor}
        >
          <Text style={styles.text}>Log out</Text>
        </AwesomeButton>
      </View>
    );
  }
}

export default LogOutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 50
  },
  text: {
    color: "#fff"
  }
});
