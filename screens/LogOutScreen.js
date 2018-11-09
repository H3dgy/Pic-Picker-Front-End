import React, { Component } from "react";
import AwesomeButton from "react-native-really-awesome-button";
import { StyleSheet, Text, View, Button, AsyncStorage } from "react-native";
import { connect } from 'react-redux';
import { changeCredits, changeSettings, changeActive } from '../redux/actions/actions';
import {initialStateUser, initialStateImages, initialStateImageStream} from "../redux/reducers/initialState"
import {AppColors} from "../ColorScheme"


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
          backgroundColor={AppColors.redButton.color}
          backgroundDarker={AppColors.redButton.backgroundColor}
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
    backgroundColor: AppColors.mainBackground,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 50
  },
  text: {
    color: "#fff"
  }
});
