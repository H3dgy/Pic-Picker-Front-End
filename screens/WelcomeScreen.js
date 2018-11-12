import React, { Component } from "react";
import AwesomeButton from "react-native-really-awesome-button";
import { 
  StyleSheet,
  View,
  TextInput,
  Text,
  } from "react-native";
import {AppColors} from "../ColorScheme";
import { connect } from 'react-redux';
import {changeUser} from '../redux/actions/actions';


class WelcomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      username: ""
    }
  }

  _checkSignIn = () => {
    fetch('http://localhost:3000/userdata', {
      method: 'GET',
      headers: {
        'username': this.state.username.toLowerCase()
      }
    })
    .then((res) => res.json())
    .then((res) => {
      this.props.changeUser(res);
      this.props.navigation.navigate("Home");
      this._saveToMemory();
    })
    .catch((error)=> {
      console.log(error);
      this._initiateNewUser(this.state.username);
      this.props.navigation.navigate("SignUp");
    } )
  };

  _saveToMemory = async () => {
    await AsyncStorage.setItem("user", JSON.stringify(this.props.user));
  }

  _initiateNewUser = (username) => {
    const newUser = {
      id: null,
      username: username,
      password: "password1",
      settings: {
        gender: null,
        age: 18,
        feedbackGender: {
          male: false,
          female: false,
        },
        feedbackAge: [
          false,
          false,
          false,
          false
        ]
      }
    }
    this._sendToApi(newUser);
  }

  _sendToApi = (user) => {
    fetch('http://localhost:3000/adduser', {
      method: 'POST',
      body: JSON.stringify(user),
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
    return <View style={styles.container}>
      <Text>Username</Text>
      <TextInput style={styles.input}
      onChangeText={(input) => this.setState({username: input})}
      value={this.state.username}
      />
        <AwesomeButton style={styles.buttonContainer}
          onPress={() => this._checkSignIn()}
          backgroundColor={AppColors.purpleButton.color}
          backgroundDarker={AppColors.purpleButton.backgroundColor}
        >Sign in or up</AwesomeButton>
      </View>;
  }
}

//this.props.navigation.navigate("SignUp")

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  changeUser: (User) => dispatch(changeUser(User)) 
});

export default connect(mapStateToProps, mapDispatchToProps) (WelcomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.mainBackground,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonContainer: {
    marginTop: 5,
    marginBottom: 5
  }, 
  input: {
    margin: 15,
    padding: 10,
    height: 50,
    width: 200,
    borderRadius: 10,
    borderWidth: 2,
  }
});
