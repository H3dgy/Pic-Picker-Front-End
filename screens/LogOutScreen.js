import React, { Component } from "react";
import AwesomeButton from "react-native-really-awesome-button";
import { StyleSheet, Text, View, Button, AsyncStorage } from "react-native";
import { connect } from 'react-redux';
import { changeCredits, changeSettings, changeActive } from '../redux/actions/actions';
import {initialStateUser, initialStateImages, initialStateImageStream} from "../redux/reducers/initialState"


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
    await AsyncStorage.removeItem("userSettings");
    this._resetRedux();
    this.props.navigation.navigate("Auth");
  };

  _resetRedux = () => {
    this.props.changeSettings(initialStateUser.settings);
    this.props.changeCredits(initialStateUser.credits);
  }

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

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  changeCredits: (credits) => dispatch(changeCredits(credits)),
  changeSettings: (settings) => dispatch(changeSettings(settings)),
  changeCredits: (credits) => dispatch(changeCredits(credits))
});

export default connect(mapStateToProps,mapDispatchToProps) (LogOutScreen);

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
