import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";
import AwesomeButton from "react-native-really-awesome-button";
const SCREEN_WIDTH = Dimensions.get("window").width;

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
      <View style={styles.container}>
        <Image style={styles.image} source={require("../assets/test.jpg")} />
        <View style={{flex:1, flexDirection: 'column', alignItems: 'center',justifyContent: 'space-between'}}>
          <AwesomeButton
            style={{ marginLeft: 50 }}
            width={90}
            height={40}
            borderRadius={30}
          >
            <Text>More!</Text>
          </AwesomeButton>
          <View style={[styles.imageContainer]}>
            <Image
              source={require("../assets/favorite.png")}
              style={styles.star}
            />
            <Text style={styles.paragraph}>{this.state.score}</Text>
          </View>
          <View style={styles.circle}>
            <Text style={styles.paragraph} >{this.state.score}</Text>
          </View>
        </View>
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
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  star: {
    flexGrow:1,
    height:null,
    width:null,
  },
  paragraph: {
    position: 'absolute',
    left: '36%',
    top: '40%',
    fontSize: 20,
    fontWeight: "bold",
    color: 'white'
  },
  circle: {
    backgroundColor: '#600080',
    height: 50,
    width: 50,
    borderRadius: 25,
  }
});
