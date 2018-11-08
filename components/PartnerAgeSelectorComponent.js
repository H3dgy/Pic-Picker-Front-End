import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import AwesomeButton from "react-native-really-awesome-button";
import { Image } from "react-native";
import { changeSettings } from '../redux/actions/actions';
import { connect } from 'react-redux';

const standardColors = {
  color: "#c5bdcc",
  backgroundColor:  "#9e95a5",
}

const selectedColors = {
  color: "#9d4fd1",
  backgroundColor: "#733b99",
}

const buttonDimensions = {
  width: 80,
  height: 80,
}
/**
 * Bucket 1: 18 - 25
 * Bucket 2: 25 - 35
 * Bucket 3: 35 - 45
 * Bucket 4: 45+
 */
class PartnerAgeSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
        bucket1: false,
        bucket2: false,
        bucket3: false,
        bucket4: false,
    };
  }


  _setBucket = (id) => {
    const userSettings = {...this.props.settings};
    userSettings.feedbackAge[id] = !userSettings.feedbackAge[id];
    this.props.changeSettings(userSettings);
  }

  render() {
    const bucketArray = this.props.settings.feedbackAge
    return (
      <View style={styles.container}>
        <AwesomeButton
          width={buttonDimensions.width}
          height={buttonDimensions.height}
          backgroundColor={bucketArray[0] ? selectedColors.color: standardColors.color}
          backgroundDarker = {bucketArray[0] ? selectedColors.backgroundColor: standardColors.backgroundColor}
          onPress={() => this._setBucket(0)}
        >
        <Text>18 - 25</Text>
        </AwesomeButton>

        <AwesomeButton
          width={buttonDimensions.width}
          height={buttonDimensions.height}
          backgroundColor={bucketArray[1] ? selectedColors.color: standardColors.color}
          backgroundDarker = {bucketArray[1] ? selectedColors.backgroundColor: standardColors.backgroundColor}
          onPress={() => this._setBucket(1)}
        >
        <Text>25 - 35</Text>
        </AwesomeButton>

        <AwesomeButton
          width={buttonDimensions.width}
          height={buttonDimensions.height}
          backgroundColor={bucketArray[2] ? selectedColors.color: standardColors.color}
          backgroundDarker = {bucketArray[2] ? selectedColors.backgroundColor: standardColors.backgroundColor}
          onPress={() => this._setBucket(2)}
        >
        <Text>35 - 45</Text>
        </AwesomeButton>
        <AwesomeButton
          width={buttonDimensions.width}
          height={buttonDimensions.height}
          backgroundColor={bucketArray[3] ? selectedColors.color: standardColors.color}
          backgroundDarker = {bucketArray[3] ? selectedColors.backgroundColor: standardColors.backgroundColor}
          onPress={() => this._setBucket(3)}
        >
        <Text>45+</Text>
        </AwesomeButton>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  settings: state.user.settings 
});

const mapDispatchToProps = (dispatch) => ({
  changeSettings: (settings) => dispatch(changeSettings(settings))
});

export default connect(mapStateToProps,mapDispatchToProps) (PartnerAgeSelector);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between", 
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 20
  },
  buttons: {
    width: 50,
    height: 50
  }
});
