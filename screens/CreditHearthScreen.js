import React, { Component } from "react";
import { StyleSheet, Text, View, Image} from "react-native";
import { connect } from 'react-redux';
import { changeUser } from '../redux/actions/actions';
import AwesomeButton from "react-native-really-awesome-button";
import {AppColors} from "../ColorScheme";

class CreditHearthScreen extends Component {
  constructor(props) {
    super(props);
  }

  _buyCredits = () => {
    fetch('http://localhost:3000/incrementCredits', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify({
        id: this.props.user.id
      })
    })
    .then(res => res.json())
    .then(res => {
      this.props.changeUser(res);
    })
    .catch((error)=> {
      console.log(error);
    })
  }

  render() {
    return (
      <View style={styles.container}>
       <Text style={styles.feedbackText}>Swipe for additional credits</Text>
       <View style={styles.imageContainer}>
       <Image style={styles.image} source={require("../assets/hearth.png")} />
       <View style={styles.textCircle}>
       <Text style={styles.feedbackText}>{this.props.user.credits}</Text>
       </View>
       </View>
        <Text style={styles.feedbackText}> Credits allow you to upload pictures and get feedback</Text>
        <AwesomeButton
          onPress={this._buyCredits}
          backgroundColor={AppColors.purpleButton.color}
          backgroundDarker={AppColors.purpleButton.backgroundColor}
        >
          <Text style={styles.text}>Buy Credit</Text>
        </AwesomeButton>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  credits: state.user.credits,
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  changeUser: (user) => dispatch(changeUser(user))
});

export default connect(mapStateToProps,mapDispatchToProps) (CreditHearthScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.mainBackground,
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 100,
    paddingBottom: 100,
    paddingLeft: 30,
    height: '100%',
    paddingRight: 30,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  textCircle: {
    position: 'absolute',
    height: 60,
    width: 60,
    backgroundColor: "#fff",
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 'bold',
  },
  feedbackText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20
  },
  image: {
    width: 180,
    height: 180,
  }
});