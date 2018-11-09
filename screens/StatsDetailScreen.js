import React, { Component } from "react";
import AwesomeButton from "react-native-really-awesome-button";
import { StyleSheet, View, Text,  ScrollView, Dimensions } from "react-native";
import PieChartComponent from "../components/charts/PieChartComponent";
import ColumnChartComponent from "../components/charts/ColumnChartComponent";
import StatDetailPictureComponent from "../components/StatDetailPictureComponent";

const SCREEN_HEIGHT = Dimensions.get("window").height;


class StatsDetailScreen extends Component {
  constructor() {
    super();
  }

  render() {
    return (
        <StatDetailPictureComponent></StatDetailPictureComponent>
    )
  }
}

export default StatsDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  viewContainer: {
    flex: 1,
    height: null,
    width: null,
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center'
  }
});