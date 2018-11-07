import React, { Component } from "react";
import { StyleSheet,
   Text, 
   View,
   Button,
   AsyncStorage, 
  } from "react-native";

class SignUpScreen extends Component {
  constructor() {
    super();
  }

  signUp = async () => {
    await AsyncStorage.setItem('userToken', 'Frederik');
    this.props.navigation.navigate('App');
  }

  render() {
    return <View style={styles.container}>
        <Text>Sign-Up screen</Text>
        <Button title="Complete Sign up" onPress={this.signUp} />
      </View>;
  }
}

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
