import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  AsyncStorage
} from 'react-native';

class LogOutScreen extends Component {

  constructor() {
    super()
  }

  logOut = async () => {
    await AsyncStorage.removeItem('userToken');
    console.log(this.props.navigation);
    this.props.navigation.navigate('Auth');
  }

  render() {
    return (<View style={styles.container}>
      <Text>log out screen</Text>
      <Button title="Log Out" onPress={this.logOut} />
    </View>);
  }
}

export default LogOutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
