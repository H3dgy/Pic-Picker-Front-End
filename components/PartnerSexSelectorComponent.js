import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import AwesomeButton from "react-native-really-awesome-button";
import { Image } from "react-native";

class PartnerSexSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
        male: false,
        female: false,
    };
  }

  maleSelection = () => {
      this.setState({
        male: !this.state.male
      })
  };

  femaleSelection = () => {
      this.setState({
        female: !this.state.female
      })
  };
  render() {
    return (
      <View style={styles.container}>
        <AwesomeButton
          width={80}
          height={80}
          borderRadius={40}
          onPress={this.femaleSelection}
          backgroundColor={this.state.female ? femaleColors.color : standardColors.color}
          backgroundDarker = {this.state.female ? femaleColors.backgroundColor : standardColors.backgroundColor}
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
          onPress={this.maleSelection}
          backgroundColor={this.state.male ? maleColors.color: standardColors.color}
          backgroundDarker = {this.state.male ? maleColors.backgroundColor: standardColors.backgroundColor}
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
export default PartnerSexSelector;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between", 
    marginLeft: 80,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 80
  },
  buttons: {
    width: 50,
    height: 50
  }
});

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