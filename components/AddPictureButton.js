import React, { Component } from "react";
import {StyleSheet, Image, View} from "react-native";
import { ImagePicker, Permissions } from 'expo';
import AwesomeButton from "react-native-really-awesome-button";
import Icon from "react-native-vector-icons/Ionicons";

const standardColors = {
  color: "#c5bdcc",
  backgroundColor: "#9e95a5"
};

class AddPictureButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasCameraPermission: null,
      image: null,
    }
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    this.setState({hasCameraPermission: status === 'granted'});
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: false,
      base64: true
    })
    if(!result.cancelled) {
      this.setState({image: result.uri})
    }
  };

  render() {
    const { hasCameraPermission } = this.state;
    let { image } = this.state;
    if (hasCameraPermission === null) {
      return <View/>
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera roll</Text>
    } else {
      return (
        <View style={styles.container}>
          <AwesomeButton
            width={50}
            height={50}
            borderRadius={25}
            onPress={this._pickImage}
            backgroundColor={standardColors.color}
            backgroundDarker={standardColors.backgroundColor}
            style={{ marginBottom: 10, marginTop: 20 }}
          >
            <Icon name="ios-add" size={34} color={"white"} />
          </AwesomeButton>
          {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        </View>
      );
    }
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
