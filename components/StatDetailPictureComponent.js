import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import AwesomeButton from "react-native-really-awesome-button";

const standardColors = {
  color: "white",
  backgroundColor: "#9e95a5",
  textHighlight: "#9d4fd1"
};


class StatDetailPictureComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  showDetails = () => {
    this.props.navigation.navigate("StatsDetailScreen")
  }

  render() {
    return (
        <View style={styles.container}>
          <Image style={styles.image} source={require("../assets/test.jpg")} />
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
    position: "absolute",
    shadowOffset: { width: 20, height: 10 },
    shadowColor: standardColors.backgroundColor,
    shadowOpacity: 1
  },
  container: {
    width: 200,
    height: 200,
    marginTop: 15,
    marginBottom: 15
  },
  text: {
    marginBottom: 5,
  }
});
