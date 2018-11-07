import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView} from "react-native";
import AwesomeButton from "react-native-really-awesome-button";
import Icon from "react-native-vector-icons/Ionicons";
import StatPictureComponent from "../components/StatPictureComponent";

const standardColors = {
  color: "#c5bdcc",
  backgroundColor:  "#9e95a5",
}

class AppStatsScreen extends Component {
  constructor() {
    super();
  }

  addPicture = () => {

  }
  render() {
    return (
      <ScrollView centerContent={true} style={{backgroundColor: 'white'}}>
        <View style={styles.container}>
        <AwesomeButton
        width={50}
        height={50}
        borderRadius={25}
          onPress={this.addPicture}
          backgroundColor={standardColors.color}
          backgroundDarker={standardColors.backgroundColor}
          style={{marginBottom: 10, marginTop: 20}}
        >
        <Icon name="ios-add" size={34} color={'white'}/>
        </AwesomeButton>
        <StatPictureComponent></StatPictureComponent>
        <StatPictureComponent></StatPictureComponent>
        <StatPictureComponent></StatPictureComponent>
        <StatPictureComponent></StatPictureComponent>
        </View>
      </ScrollView>
    );
  }
}

export default AppStatsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});


