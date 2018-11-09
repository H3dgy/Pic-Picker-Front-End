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

/**
 * Issues with graphs make it difficult to split out the subcomponents of this file
 */

// class PieComponent extends Component {
//   render() {
//     return (
//       <View style={pieComponentstyles.container}>
//         <View style={pieComponentstyles.container}>
//           <View
//             style={[
//               pieComponentstyles.container,
//               pieComponentstyles.circle,
//               pieComponentstyles.positioning
//             ]}
//           >
//             <Text>50%</Text>
//           </View>
//           <View>
//             <PieChartComponent liked={70} />
//           </View>
//         </View>
//         <Text>Gay</Text>
//       </View>
//     );
//   }
// }

class StatDetailPictureComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 10,
      people: 20
    };
  }

  showDetails = () => {
    this.props.navigation.navigate("StatsDetailScreen");
  };

  render() {
    return (
      <View style={mainStyles.container}>
        <View style={mainStyles.topContainer}>
          <Image
            style={{ flex: 1, height: "100%", borderRadius: 10 }}
            source={require("../assets/testimages/testimage1.jpg")}
          />
          <View style={mainStyles.scoreContainer}>
            <View style={mainStyles.subScoreContainer}>
              <View style={mainStyles.textCircles}>
                <Text style={mainStyles.scoreText}>10</Text>
              </View>
              <View style={mainStyles.textCircles}>
                <Text style={mainStyles.scoreText}>20</Text>
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
        </View>
        <Text>Succes per gender:</Text>
        <View style={mainStyles.pieContainer}>
          <PieComponent />
          <PieComponent />
        </View>
        <Text>Succes per age</Text>
        <View style={{ height: 140 }}>
          <ColumnChartComponent />
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

const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: SCREEN_HEIGHT - 200,
    width: SCREEN_WIDTH - 20,
    position: "absolute",
    marginTop: 5,
    marginBottom: 5,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    borderColor: "grey",
    borderWidth: 0.5,
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

export default StatDetailPictureComponent;
