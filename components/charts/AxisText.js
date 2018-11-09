
import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions} from "react-native";

const categories = ["18-25", "25-35", "35-45", "45+"];

const SCREEN_WIDTH = Dimensions.get("window").width;



export default class AxisText extends Component {
  _getCategories = () => {
    return categories.map((item, i) => {
      console.log(item);
      return (
        <View style={axisStyles.textContainer}>
          <Text>{item}</Text>
        </View>
      );
    });
  };
  render() {
    return <View style={axisStyles.container}>{this._getCategories()}</View>;
  }
}

const axisStyles = StyleSheet.create({
  container: {
    height: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  textContainer: {
    width: (SCREEN_WIDTH - 20) / 5,
    height: 15,
    alignItems: "center"
  }
});
