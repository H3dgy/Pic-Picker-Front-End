import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import StatPictureComponent from "../components/StatPictureComponent";
import AddPictureButton from "../components/AddPictureButton";

class AppStatsScreen extends Component {
  constructor(props) {
    super(props);
  }

  addPicture = () => {};
  render() {
    return (
      <ScrollView centerContent={true} style={{ backgroundColor: "white" }}>
        <View style={styles.container}>
          <AddPictureButton />
          <StatPictureComponent navigation={this.props.navigation} />
          {/* <StatPictureComponent></StatPictureComponent>
        <StatPictureComponent></StatPictureComponent>
        <StatPictureComponent></StatPictureComponent> */}
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
    justifyContent: "flex-start"
  }
});
