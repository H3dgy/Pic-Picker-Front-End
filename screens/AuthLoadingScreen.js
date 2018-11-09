import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  AsyncStorage
} from 'react-native';
import { changeSettings } from '../redux/actions/actions';
import { connect } from 'react-redux';
import {AppColors} from '../ColorScheme';

class AuthLoadingScreen extends Component {

  constructor () {
    super ()
    this.loadApp();
  }

  loadApp = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    let userSettings = await AsyncStorage.getItem('userSettings');
    console.log(userSettings);
    if (userSettings) {
      userSettings = JSON.parse(userSettings);
      this.props.changeSettings(userSettings)
    }
    this.props.navigation.navigate(userToken? 'App' : 'Auth');
  }
  render() {
    return (<View style={styles.container}>
      <Text>Loading screen</Text>
      <ActivityIndicator></ActivityIndicator>
    </View>);
  }
}

// Not used but expected by connect
const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  changeSettings: (settings) => dispatch(changeSettings(settings))
});

export default connect(mapStateToProps,mapDispatchToProps) (AuthLoadingScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.mainBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
