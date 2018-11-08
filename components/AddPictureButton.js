import React, { Component } from "react";
import {StyleSheet, Image, View} from "react-native";
import { ImagePicker, Permissions } from 'expo';
import AwesomeButton from "react-native-really-awesome-button";
import Icon from "react-native-vector-icons/Ionicons";
import { connect } from 'react-redux';
import { changeCredits } from '../redux/actions/actions';
import { changeImageList } from '../redux/actions/actions';

const standardColors = {
  color: "#c5bdcc",
  backgroundColor: "#9e95a5"
};

class AddPictureButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasCameraPermission: null,
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
      const imageList = [...this.props.imageList];
      const image = { 
        id: imageList.length + 1, 
        uri:  result.uri, 
        people: 10, 
        score: 8 };
      imageList.push(image);
      this.props.changeImageList(imageList)
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
const mapStateToProps = (state) => ({
  credits: state.user.credits,
  imageList: state.images.imageList
});

const mapDispatchToProps = (dispatch) => ({
  changeCredits: (credits) => dispatch(changeCredits(credits)),
  changeImageList: (imageList) => dispatch(changeImageList(imageList))
});

export default connect(mapStateToProps,mapDispatchToProps) (AddPictureButton);

