import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import AwesomeButton from "react-native-really-awesome-button";
import { Image } from "react-native";

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

  render() {
    return (
      <View style={styles.container}>
        <AwesomeButton
          width={buttonDimensions.width}
          height={buttonDimensions.height}
          backgroundColor={this.state.bucket1 ? selectedColors.color: standardColors.color}
          backgroundDarker = {this.state.bucket1 ? selectedColors.backgroundColor: standardColors.backgroundColor}
          onPress={() => this.setState({bucket1: !this.state.bucket1})}
        >
        <Text>18 - 25</Text>
        </AwesomeButton>

        <AwesomeButton
          width={buttonDimensions.width}
          height={buttonDimensions.height}
          backgroundColor={this.state.bucket2 ? selectedColors.color: standardColors.color}
          backgroundDarker = {this.state.bucket2 ? selectedColors.backgroundColor: standardColors.backgroundColor}
          onPress={() => this.setState({bucket2: !this.state.bucket2})}
        >
        <Text>25 - 35</Text>
        </AwesomeButton>

        <AwesomeButton
          width={buttonDimensions.width}
          height={buttonDimensions.height}
          backgroundColor={this.state.bucket3 ? selectedColors.color: standardColors.color}
          backgroundDarker = {this.state.bucket3 ? selectedColors.backgroundColor: standardColors.backgroundColor}
          onPress={() => this.setState({bucket3: !this.state.bucket3})}
        >
        <Text>35 - 45</Text>
        </AwesomeButton>
        <AwesomeButton
          width={buttonDimensions.width}
          height={buttonDimensions.height}
          backgroundColor={this.state.bucket4 ? selectedColors.color: standardColors.color}
          backgroundDarker = {this.state.bucket4 ? selectedColors.backgroundColor: standardColors.backgroundColor}
          onPress={() => this.setState({bucket4: !this.state.bucket4})}
        >
        <Text>45+</Text>
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
