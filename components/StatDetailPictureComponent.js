import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import AwesomeButton from "react-native-really-awesome-button";
import PieComponent from "./charts/PieComponent";
import ColumnChartComponent from "./charts/ColumnChartComponent";
import AxisText from "./charts/AxisText";

import { connect } from 'react-redux';
import { AppColors } from "../ColorScheme";
import StatSummaryComponent from "./StatSummaryComponent";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

/**
 * Issues with graphs make it difficult to split out the subcomponents of this file
 */


class StatDetailPictureComponent extends Component {

  constructor (props) {
    super(props)
  }
  showDetails = () => {
    this.props.navigation.navigate("StatsDetailScreen");
  };

  _createAgeData = () => {
    const arr = this.props.feedbackAge;
    const result = arr.map(el => {
      if(el.people >= 0) return el.upVotes / el.people * 100;
      return 0;
    })
    this.setState({ageFeedback: result})
  }

  render() {
    return (
      <View style={mainStyles.container}>
        <StatSummaryComponent uri={this.props.active.uri} data={this.props.active.data}></StatSummaryComponent>
        <Text>Succes per gender:</Text>
        <View style={mainStyles.pieContainer}>
          <PieComponent feedbackGender={this.props.active.data.feedbackGender.male.summary * 100} name={'male'} highlight={this.props.settings.feedbackGender.male}/>
          <PieComponent feedbackGender={this.props.active.data.feedbackGender.female.summary * 100} name={'female'} highlight={this.props.settings.feedbackGender.female}/>
        </View>
        <Text>Succes per age</Text>
        <View style={{ height: 140 }}>
          <ColumnChartComponent feedbackAge={this.props.active.data.feedbackAge}/>
          <AxisText />
        </View>
        <AwesomeButton
          backgroundColor={AppColors.purpleButton.color}
          backgroundDarker={AppColors.purpleButton.backgroundColor}
          height={40}
        >
          <Text style={{ color: "white", marginTop: 5 }}>
            Get more feedback
          </Text>
        </AwesomeButton>
      </View>
    );
  }
}

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

const mapStateToProps = (state) => ({
  active: state.images.active,
  user: state.user,
  settings: state.user.settings,
  feedbackGender: state.images.active.data.feedbackGender,
  feedbackAge: state.images.active.data.feedbackAge
});

const mapDispatchToProps = (dispatch) => ({
 
});

export default connect(mapStateToProps,mapDispatchToProps) (StatDetailPictureComponent);


