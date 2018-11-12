import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import AwesomeButton from "react-native-really-awesome-button";
import PieChartComponent from "../components/charts/PieChartComponent";
import ColumnChartComponent from "../components/charts/ColumnChartComponent";
import StatDetailPictureComponent from "../components/StatDetailPictureComponent";
import StatSummaryComponent from "./StatSummaryComponent";

const standardColors = {
  color: "white",
  backgroundColor: "#9e95a5",
  textHighlight: "#9d4fd1"
};


class StatPictureComponent extends Component {

  showDetails = () => {
    this.props.navigation.navigate("StatsDetailScreen")
  }

  render() {
    return (
          <TouchableOpacity onPress={this.showDetails}>
          <StatSummaryComponent></StatSummaryComponent>
          </TouchableOpacity>
    );
  }
}

export default StatPictureComponent;

const styles = StyleSheet.create({
  image: {
    borderRadius: 180 / 2,
    width: 180,
    height: 180,
    resizeMode: "cover",
    position: "absolute",
    shadowOffset: { width: 20, height: 10 },
    shadowColor: standardColors.backgroundColor,
    shadowOpacity: 1
  },
  topButton: {
    position: "absolute",
    right: 0,
    top: -25
  },
  bottomButton: {
    position: "absolute",
    bottom: 5
  },
  container: {
    width: 200,
    height: 200,
    marginTop: 15,
    marginBottom: 15
  },
  text: {
    marginBottom: 5,
  },
  imageContainer: {
    width: 80,
    height: 80,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  star: {
    flexGrow:1,
    height:null,
    width:null,
    alignItems: 'center',
    justifyContent:'center',
  },
  paragraph: {
    position: 'absolute',
    left: '36%',
    top: '40%',
    fontSize: 20,
    fontWeight: "bold",
    color: 'white'
  }
});
