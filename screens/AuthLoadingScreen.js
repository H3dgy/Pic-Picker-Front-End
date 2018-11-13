import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  AsyncStorage
} from "react-native";
import { changeUser } from "../redux/actions/actions";
import { connect } from "react-redux";
import { AppColors } from "../ColorScheme";

class AuthLoadingScreen extends Component {
  constructor() {
    super();
    this.loadApp();
  }

  loadApp = async () => {
    let user = await AsyncStorage.getItem("user");
    if (user) {
      user = JSON.parse(user);
      fetch("http://localhost:3000/userdata", {
        method: "GET",
        headers: {
          username: user.username.toLowerCase()
        }
      })
        .then(res => res.json())
        .then(res => {
          this.props.changeUser(res);
          this.props.navigation.navigate("App");
        })
        .catch(error => {
          console.log(error, "user retrieval error");
          this.props.navigation.navigate("Auth");
        });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Loading screen</Text>
        <ActivityIndicator />
      </View>
    );
  }
}

// Not used but expected by connect
const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  changeUser: user => dispatch(changeUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthLoadingScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.mainBackground,
    alignItems: "center",
    justifyContent: "center"
  }
});
