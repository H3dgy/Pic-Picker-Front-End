import React, { Component } from "react";
import {
  CameraRoll,
  Image,
  StyleSheet,
  TouchableHighlight,
  View
} from "react-native";
import AwesomeButton from "react-native-really-awesome-button";
import Icon from "react-native-vector-icons/Ionicons";

const standardColors = {
  color: "#c5bdcc",
  backgroundColor: "#9e95a5"
};

class AddPictureButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AwesomeButton
          width={50}
          height={50}
          borderRadius={25}
          onPress={this.addPicture}
          backgroundColor={standardColors.color}
          backgroundDarker={standardColors.backgroundColor}
          style={{ marginBottom: 10, marginTop: 20 }}
        >
          <Icon name="ios-add" size={34} color={"white"} />
        </AwesomeButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default AddPictureButton;
