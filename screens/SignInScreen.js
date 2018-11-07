import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  AsyncStorage
} from 'react-native';

class SignInScreen extends Component {

  constructor() {
    super()
  }

  signIn = async () => {
    await AsyncStorage.setItem('userToken','Frederik');
    this.props.navigation.navigate('App');
  }

  render() {
    return (<View style={styles.container}>
      <Text>Sign-in screen</Text>
      <Button title="Complete Sign In" onPress={this.signIn} /> 
    </View>);
  }
}

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
