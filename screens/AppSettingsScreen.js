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
        <Text>I am a:</Text>
        <SexSelector/>
        <Text>And feel </Text>
        <AgeSelector/>
        <Text>So give me that feedback from: </Text>
        <PartnerSexSelector/>
        <Text>Who fit within within the following buckets</Text>
        <PartnerAgeSelector/>
      </View>
    );
  }
}

export default AppSettingsScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: 'column',
    alignItems: 'center'
  }
});
