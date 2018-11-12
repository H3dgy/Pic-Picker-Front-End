import React, { Component } from "react";
import AwesomeButton from "react-native-really-awesome-button";
import SettingsComponent from "../components/SettingsComponent";
import { StyleSheet, Text, View, Button, AsyncStorage } from "react-native";
import {connect} from 'react-redux';
import {AppColors} from '../ColorScheme';
import {changeUser} from '../redux/actions/actions';

class SignUpScreen extends Component {
  constructor() {
    super();
  }

  signUp = async () => {
    this._sendToApi();
    await AsyncStorage.setItem("user", JSON.stringify(this.props.user));
    this.props.navigation.navigate("App");
  };

  _sendToApi = () => {
    fetch('http://localhost:3000/adduser', {
      method: 'POST',
      body: JSON.stringify(this.props.user),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((res) => res.json())
    .then((res) => {
      this.props.changeUser(res);
    })
    .catch((error)=> {
      console.log(error);
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <SettingsComponent />
        <AwesomeButton
          style={styles.buttonContainer}
          onPress={this.signUp}
          backgroundColor={AppColors.purpleButton.color}
          backgroundDarker={AppColors.purpleButton.backgroundColor}
        >
          Let's go!
        </AwesomeButton>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  changeUser: (User) => dispatch(changeUser(User)) 
});

export default connect(mapStateToProps, mapDispatchToProps) (SignUpScreen);

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 20,
    flex: 1,
    backgroundColor: AppColors.mainBackground,
    flexDirection: "column",
    alignItems: "center"
  }
});
