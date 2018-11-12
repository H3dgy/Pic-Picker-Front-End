import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  AsyncStorage
} from 'react-native';
import { changeUser } from '../redux/actions/actions';
import { connect } from 'react-redux';
import {AppColors} from '../ColorScheme';

class AuthLoadingScreen extends Component {

  constructor () {
    super ()
    this.loadApp();
  }

  loadApp = async () => {
    let user = await AsyncStorage.getItem('user');
    if (user) {
      user = JSON.parse(user);
      this.props.changeUser(user)
    }
    this.props.navigation.navigate(user? 'App' : 'Auth');
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
  changeUser: (user) => dispatch(changeUser(user))
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
