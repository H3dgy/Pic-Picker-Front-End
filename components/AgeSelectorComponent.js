import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Slider from "react-native-slider";
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

class AgeSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selected: "none"
    };
  }

  sexSelection = (buttonID) => {
   
  };

  render() {
    return (
      
    )
  }
}
export default AgeSelector;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 20
  },
});
