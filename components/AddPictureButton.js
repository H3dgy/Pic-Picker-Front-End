import React, { Component } from "react";
import { StyleSheet, Image, View } from "react-native";
import { ImagePicker } from "expo";
import * as Permissions from 'expo-permissions';
import AwesomeButton from "react-native-really-awesome-button";
import Icon from "react-native-vector-icons/Ionicons";
import { connect } from "react-redux";
import { changeUser } from "../redux/actions/actions";
import { changeImageList } from "../redux/actions/actions";
import { AppColors } from "../ColorScheme";

class AddPictureButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null
    };
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    this.setState({ hasCameraPermission: status === "granted" });
  }

  _postImage = async uri => {
    const body = { ...this.props.user, uri: uri };
    fetch("http://localhost:3000/uploadimage", {
      method: "Post",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        this.props.changeImageList(res);
      })
      .catch(error => {
        console.log(error);
      });
  };

  _changeCredits = () => {
    fetch("http://localhost:3000/decrementCredits", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: this.props.user.id
      })
    })
      .then(res => res.json())
      .then(res => {
        this.props.changeUser(res);
      })
      .catch(error => {
        console.log(error);
      });
  };

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: false,
      base64: true
    });
    if (!result.cancelled) {
      let base64Img = `data:image/jpg;base64,${result.base64}`;
      const apiUrl = `https://api.cloudinary.com/v1_1/diek0ztdy/image/upload`;
      const data = {
        file: base64Img,
        upload_preset: "ch3auuqz"
      };

      fetch(apiUrl, {
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json"
        },
        method: "POST"
      })
        .then(async r => {
          let data = await r.json();
          this._postImage(data.secure_url);
          this._changeCredits();
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera roll</Text>;
    } else {
      return (
        <View style={styles.container}>
          <AwesomeButton
            width={50}
            height={50}
            borderRadius={25}
            onPress={this._pickImage}
            backgroundColor={AppColors.purpleButton.color}
            backgroundDarker={AppColors.purpleButton.backgroundColor}
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
const mapStateToProps = state => ({
  credits: state.user.credits,
  imageList: state.images.imageList,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  changeUser: user => dispatch(changeUser(user)),
  changeImageList: imageList => dispatch(changeImageList(imageList))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPictureButton);
