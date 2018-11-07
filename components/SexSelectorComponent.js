import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import AwesomeButton from "react-native-really-awesome-button";
import { Image } from "react-native";

const standardColors = {
  color: "#c5bdcc",
  backgroundColor:  "#9e95a5",
}

const femaleColors = {
  color: "#d856cb",
  backgroundColor:  "#a33f99",
}

const maleColors = {
  color: "#3d79db",
  backgroundColor:  "#224d93",
}

const bothColors = {
  color: "#9d4fd1",
  backgroundColor: "#733b99",
}

class SexSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selected: "none"
    };
  }

  sexSelection = (buttonID) => {
    if (buttonID !== this.state.selected) {
      this.setState({
        selected: buttonID
      })
    } else {
      this.setState({
        selected: "none"
      })
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <AwesomeButton
          width={80}
          height={80}
          borderRadius={40}
          onPress={this.sexSelection.bind(null,"female")}
          backgroundColor={("female" === this.state.selected) ? femaleColors.color : standardColors.color}
          backgroundDarker = {("female" === this.state.selected) ? femaleColors.backgroundColor : standardColors.backgroundColor}
        >
          <Image
            source={require("../assets/female.png")}
            style={{ height: 64, width: 35 }}
          />
        </AwesomeButton>

        <AwesomeButton
          width={80}
          height={80}
          borderRadius={40}
          onPress={this.sexSelection.bind(null,"both")}
          backgroundColor={("both" === this.state.selected) ? bothColors.color: standardColors.color}
          backgroundDarker = {("both" === this.state.selected) ? bothColors.backgroundColor: standardColors.backgroundColor}
        >
          <Image
            source={require("../assets/both.png")}
            style={{ height: 60, width: 60 }}
          />
        </AwesomeButton>

        <AwesomeButton
          width={80}
          height={80}
          borderRadius={40}
          onPress={this.sexSelection.bind(null,"male")}
          backgroundColor={("male" === this.state.selected) ? maleColors.color: standardColors.color}
          backgroundDarker = {("male" === this.state.selected) ? maleColors.backgroundColor: standardColors.backgroundColor}
        >
          <Image
            source={require("../assets/male.png")}
            resizeMode="center"
            style={{ height: 64, width: 35 }}
          />
        </AwesomeButton>
      </View>
    );
  }
}
export default SexSelector;

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
