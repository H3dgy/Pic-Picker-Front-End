import React, { Component } from "react";
import { StyleSheet, Text, View} from "react-native";
import PieChartComponent from "./PieChartComponent";

export default class PieComponent extends Component {
  render() {
    return (
      <View style={pieComponentstyles.container}>
        <View style={pieComponentstyles.container}>
          <View
            style={[
              pieComponentstyles.container,
              pieComponentstyles.circle,
              pieComponentstyles.positioning
            ]}
          >
            <Text>{this.props.feedbackGender}%</Text>
          </View>
          <View>
            <PieChartComponent liked={this.props.feedbackGender} highlight={this.props.highlight}/>
          </View>
        </View>
        <Text>{this.props.name}</Text>
      </View>
    );
  }
}

const pieComponentstyles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  circle: {
    borderRadius: 50 / 2,
    width: 50,
    height: 50,
    backgroundColor: "white"
  },
  positioning: {
    position: "absolute",
    zIndex: 1000
  }
});