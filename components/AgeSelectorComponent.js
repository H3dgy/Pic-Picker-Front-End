import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Slider from "react-native-slider";
import { Image } from "react-native";
import { changeSettings, changeUser } from "../redux/actions/actions";
import { connect } from "react-redux";

class AgeSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.settings.age
    };
  }

  _ageSelection = value => {
    this.setState({ value: value });
    const user = this.props.user;
    user.settings.age = value;
    this._updateSettings(user);
  };

  _updateSettings = user => {
    fetch("http://localhost:3000/updatesettings", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        this.props.changeUser(res);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Slider
          style={styles.slidercontainer}
          value={this.state.value ? this.state.value : 18}
          onValueChange={value => this.setState({ value: value })}
          onSlidingComplete={value => this._ageSelection(value)}
          maximumValue={99}
          minimumValue={18}
          step={1}
          thumbStyle={styles.thumb}
        />
        <Text>{this.state.value ? this.state.value : 18} years old</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  settings: state.user.settings,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  changeSettings: settings => dispatch(changeSettings(settings)),
  changeUser: user => dispatch(changeUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AgeSelector);

const styles = StyleSheet.create({
  thumb: {
    width: 30,
    height: 30,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 1
  },
  slidercontainer: {
    width: 300
    // marginLeft: 30,
    // marginTop: 10,
    // marginBottom: 10,
    // marginRight: 30
  },
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  }
});
