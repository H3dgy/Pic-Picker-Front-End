import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from "react-native";
import AwesomeButton from "react-native-really-awesome-button";
import PieChartComponent from "./charts/PieChartComponent";
import ColumnChartComponent from "./charts/ColumnChartComponent";

import { AppColors } from "../ColorScheme";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const standardColors = {
  color: "white",
  backgroundColor: "#9e95a5",
  textHighlight: "#9d4fd1"
};

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
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          height: SCREEN_HEIGHT - 170,
          width: SCREEN_WIDTH - 20,
          position: "absolute",
          marginTop: 5,
          marginBottom: 5,
          paddingTop: 20,
          paddingBottom: 20,
          marginLeft: 10,
          marginRight: 10,
          borderColor: "grey",
          borderWidth: 0.5,
          borderRadius: 20,
          backgroundColor: "#fff"
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Image style={{
            flex:1,
            height: SCREEN_HEIGHT * 0.15,
            marginRight: 2.5,
            marginLeft: 10,
            borderRadius: 5,
          }}
          source={require("../assets/testimages/testimage1.jpg")}
          >
          </Image>
          <View
            style={{
              flex: 1,
              height: SCREEN_HEIGHT * 0.15,
              flexDirection: "row",
              marginRight: 5,
              marginLeft: 2.5,
              borderRadius: 5,
            }}
          >
            <View
              style={{
                flex: 1,
                height: SCREEN_HEIGHT * 0.15,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 20,
              }}
            >
              <View
                style={{
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
                }}
              >
                <Text style={{fontSize: 16, fontWeight:"600"}}>10</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  borderRadius: 50 / 2,
                  width: 50,
                  height: 50,
                  marginTop: 10,
                  marginBottom: 10,
                  alignItems: "center",
                  borderColor: "grey",
                  borderWidth: 1
                }}
              >
                <Text style={{fontSize: 16, fontWeight:"600"}}>20</Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                height: SCREEN_HEIGHT * 0.15,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Image
                style={{
                  borderRadius: 50 / 2,
                  width: 50,
                  height: 50,
                  marginTop: 10,
                  marginBottom: 10,
                }}
                source={require("../assets/cup.png")}
              />
              <Image
                style={{
                  borderRadius: 50 / 2,
                  width: 50,
                  height: 50,
                  resizeMode: "cover",
                  marginTop: 10,
                  marginBottom: 10,
                }}
                source={require("../assets/multipleUsers.png")}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: "green"
          }}
        />
        <Text>Test</Text>
        <View
        style={{
          flex:1,
          justifyContent: "center",
          alignItems: "center"
        }}>
        <View
        style={{
          position: 'absolute',
          flex: 1,
          justifyContent: "center",
          borderRadius: 50 / 2,
          width: 50,
          height: 50,
          marginTop: 10,
          marginBottom: 10,
          backgroundColor: 'white',
          alignItems: "center",
          borderColor: "white",
          borderWidth: 2,
          zIndex: 1000
        }}>
        <Text>50%</Text>
        </View>
        <PieChartComponent></PieChartComponent>
        </View>
        <Text>Test</Text>
        <ColumnChartComponent></ColumnChartComponent>
        <Text>Test</Text>
        <ColumnChartComponent></ColumnChartComponent>
        <AwesomeButton 
          backgroundColor={AppColors.purpleButton.color}
          backgroundDarker={AppColors.purpleButton.backgroundColor}
        >
          <Text style={{color: 'white'}}>Get more feedback</Text>
        </AwesomeButton>
      </View>
    );
  }
}

export default StatDetailPictureComponent;

const styles = StyleSheet.create({
  image: {
    borderRadius: 40,
    width: 180,
    height: 180,
    resizeMode: "cover",
    shadowOffset: { width: 20, height: 10 },
    shadowColor: standardColors.backgroundColor,
    shadowOpacity: 1
  },
  container: {
    flex: 1,
    height: 200,
    width: SCREEN_WIDTH,
    marginTop: 15,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "center"
  },
  text: {
    marginBottom: 5
  },
  imageContainer: {
    width: 70,
    height: 70,
    alignItems: "stretch",
    justifyContent: "center"
  },
  star: {
    flexGrow: 1,
    height: null,
    width: null
  },
  paragraph: {
    position: "absolute",
    left: "36%",
    top: "40%",
    fontSize: 20,
    fontWeight: "bold",
    color: "white"
  },
  circle: {
    backgroundColor: "#600080",
    height: 50,
    width: 50,
    borderRadius: 25
  }
});
