import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import AwesomeButton from "react-native-really-awesome-button";
import { Image } from "react-native";

const standardColors = {
  color: "#c5bdcc",
  backgroundColor:  "#9e95a5",
}

const selectedColors = {
  color: "#c5bdcc",
  backgroundColor:  "#9e95a5",
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
        bucket2:  false,
        bucket3: false,
        bucket4: false,
    };
  }

  ageSelection = (bucketID) => {
    
  };

  render() {
    return (
      <View style={styles.container}>
        <AwesomeButton
          width={buttonDimensions.width}
          height={buttonDimensions.height}
        >
        </AwesomeButton>

        <AwesomeButton
          width={buttonDimensions.width}
          height={buttonDimensions.height}
        >
        </AwesomeButton>

        <AwesomeButton
          width={buttonDimensions.width}
          height={buttonDimensions.height}
        >
        </AwesomeButton>
        <AwesomeButton
          width={buttonDimensions.width}
          height={buttonDimensions.height}
        >
        </AwesomeButton>
      </View>
    );
  }
}
export default PartnerAgeSelector;

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
