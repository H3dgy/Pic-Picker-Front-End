import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import AwesomeButton from "react-native-really-awesome-button";

const standardColors = {
  color: "white",
  backgroundColor: "#9e95a5",
  textHighlight: "#9d4fd1"
};


class StatPictureComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 10,
      people: 20
    };
  }

  showDetails = () => {
    this.props.navigation.navigate("StatsDetailScreen")
  }

  render() {
    return (
        <View style={styles.container}>
          <Image style={styles.image} source={this.props.image.uri} />
          <TouchableOpacity  onPress={this.showDetails}>
          <View style={[styles.imageContainer,styles.topButton]}>
          <Image
            source={require("../assets/favorite.png")}
            style={styles.star}
          />
          <Text style={styles.paragraph}>{this.state.score}</Text>
        </View>
          </TouchableOpacity>
        <AwesomeButton
        onPress = {this.showDetails}
        width={50}
        height={50}
        borderRadius={25}
        backgroundColor={standardColors.color}
        style={styles.bottomButton}
        >
          <Text>{this.state.people}</Text>
        </AwesomeButton>
      </View>
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
