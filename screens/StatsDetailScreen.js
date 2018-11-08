import React, { Component } from "react";
import AwesomeButton from "react-native-really-awesome-button";
import { StyleSheet, View, Text,  ScrollView, Dimensions } from "react-native";
import LineChartComponent from "../components/charts/LineChartComponent";
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
    <View style={{flex:1, justifyContent: 'space-between', backgroundColor: "#fff"}}>
    <View style={{height: 200, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 20, marginRight: 20, marginBottom: 20}}>
          <StatDetailPictureComponent></StatDetailPictureComponent>
    </View>
    <View style={{height: null, flexGrow:1, justifyContent: 'space-between', marginLeft: 20, marginRight: 20}}>
          <Text>SuccesRatio</Text>
          <PieChartComponent></PieChartComponent>
          <Text>Regional breakdown</Text>
          <ColumnChartComponent></ColumnChartComponent>
          <Text>Age breakdown</Text>
          <ColumnChartComponent></ColumnChartComponent>
    </View>
    </View>
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