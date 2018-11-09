import React, { Component } from "react";
import { StyleSheet, Text, View, Image} from "react-native";
import { connect } from 'react-redux';
import { changeCredits } from '../redux/actions/actions';
import AwesomeButton from "react-native-really-awesome-button";
import {AppColors} from "../ColorScheme";

class CreditHearthScreen extends Component {
  constructor(props) {
    super(props);
  }

  _buyCredits = () => {
    this.props.changeCredits(this.props.credits + 10);
  }

  render() {
    return (
      <View style={styles.container}>
       <Text style={styles.feedbackText}>Provide feedback on 10 pictures and gain a credit</Text>
        <Image style={styles.image} source={require("../assets/hearth.png")} />
        <Text style={styles.feedbackText}>One credit to get feedback from ten people</Text>
        <AwesomeButton
          onPress={this._buyCredits}
          backgroundColor={AppColors.purpleButton.color}
          backgroundDarker={AppColors.purpleButton.backgroundColor}
        >
          <Text style={styles.text}>Buy Credit</Text>
        </AwesomeButton>
        <Text style={styles.feedbackText}>{Math.floor(this.props.credits / 10)}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  credits: state.user.credits
});

const mapDispatchToProps = (dispatch) => ({
  changeCredits: (credits) => dispatch(changeCredits(credits))
});

export default connect(mapStateToProps,mapDispatchToProps) (CreditHearthScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.mainBackground,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 50
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