import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import SexSelector from "../components/SexSelectorComponent";
import AgeSelector from "../components/AgeSelectorComponent";
import PartnerSexSelector from "../components/PartnerSexSelectorComponent";
import PartnerAgeSelector from "../components/PartnerAgeSelectorComponent";


class AppSettingsScreen extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={styles.container}>
        <SexSelector/>
        <AgeSelector/>
        <PartnerSexSelector/>
        <PartnerAgeSelector/>
      </View>
    );
  }
}

export default AppSettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", 
  }
});
