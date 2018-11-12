import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import AwesomeButton from "react-native-really-awesome-button";
//import PieChartComponent from "./charts/PieChartComponent";
import PieComponent from "./charts/PieComponent";
import ColumnChartComponent from "./charts/ColumnChartComponent";
import AxisText from "./charts/AxisText";

//import PieComponent from "./charts/PieChartComponent";

import { AppColors } from "../ColorScheme";


const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

class StatSummaryComponent extends Component {

  constructor() {
    super()
  }

  render() {
    const uri = {uri: this.props.uri.toString()};
   return (<View style={mainStyles.topContainer}>
    <Image
      style={{ flex: 1, height: "100%", borderRadius: 10 }}
      source={uri}
    />
    <View style={mainStyles.scoreContainer}>
      <View style={mainStyles.subScoreContainer}>
        <View style={mainStyles.textCircles}>
          <Text style={mainStyles.scoreText}>{this.props.data.score}</Text>
        </View>
        <View style={mainStyles.textCircles}>
          <Text style={mainStyles.scoreText}>{this.props.data.people}</Text>
        </View>
      </View>
      <View style={mainStyles.subScoreContainer}>
        <Image
          style={mainStyles.logo}
          source={require("../assets/cup.png")}
        />
        <Image
          style={mainStyles.logo}
          source={require("../assets/multipleUsers.png")}
        />
      </View>
    </View>
  </View>)
  }
}

export default StatSummaryComponent;

const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: SCREEN_HEIGHT - 200,
    width: SCREEN_WIDTH - 20,
    position: "absolute",
    marginTop: 10,
    marginBottom: 5,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    borderColor: AppColors.purpleGraph.highlighted,
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: "#fff"
  },
  topContainer: {
    height: SCREEN_HEIGHT * 0.15,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10
  },
  scoreContainer: {
    flex: 1,
    height: SCREEN_HEIGHT * 0.15,
    flexDirection: "row",
    marginRight: 5,
    marginLeft: 2.5,
    borderRadius: 5
  },
  subScoreContainer: {
    flex: 1,
    height: SCREEN_HEIGHT * 0.15,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20
  },
  textCircles: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50 / 2,
    width: 50,
    height: 50,
    marginTop: 10,
    marginBottom: 10,
    borderColor: "grey",
    borderWidth: 1
  },
  scoreText: { fontSize: 16, fontWeight: "600" },
  logo: {
    borderRadius: 50 / 2,
    width: 50,
    height: 50,
    marginTop: 10,
    marginBottom: 10
  },
  pieContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly"
  }
});
