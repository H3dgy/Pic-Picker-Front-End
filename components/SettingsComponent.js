import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import SexSelector from "../components/SexSelectorComponent";
import AgeSelector from "../components/AgeSelectorComponent";
import PartnerSexSelector from "../components/PartnerSexSelectorComponent";
import PartnerAgeSelector from "../components/PartnerAgeSelectorComponent";


class SettingsComponent extends Component {
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
        <Text>I prefer feedback from: </Text>
        <PartnerSexSelector/>
        <Text>And preferable from the following ages</Text>
        <PartnerAgeSelector/>
      </View>
    );
  }
}

export default SettingsComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});