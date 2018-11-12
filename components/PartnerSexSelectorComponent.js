import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import AwesomeButton from "react-native-really-awesome-button";
import { Image } from "react-native";
import { changeUser } from '../redux/actions/actions';
import { connect } from 'react-redux';

class PartnerSexSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
        male: false,
        female: false,
    };
  }

  maleSelection = () => {
    const user = {...this.props.user};
    user.settings.feedbackGender.male = !user.settings.feedbackGender.male;
    this._updateSettings(user);
  };

  femaleSelection = () => {
    const user = {...this.props.user};
    user.settings.feedbackGender.female = !user.settings.feedbackGender.female;
    this._updateSettings(user);
  };

  _updateSettings = (user) => {
    fetch('http://localhost:3000/updatesettings', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((res) => res.json())
    .then((res) => {
      this.props.changeUser(res);
    })
    .catch((error)=> {
      console.log(error);
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <AwesomeButton
          width={80}
          height={80}
          borderRadius={40}
          onPress={this.femaleSelection}
          backgroundColor={this.props.user.settings.feedbackGender.female ? femaleColors.color : standardColors.color}
          backgroundDarker = {this.props.user.settings.feedbackGender.female ? femaleColors.backgroundColor : standardColors.backgroundColor}
        >
          <Image
            source={require("../assets/female.png")}
            style={{ height: 64, width: 35 }}
          />
        </AwesomeButton>
        <AwesomeButton
          width={80}
          height={80}
          borderRadius={40}
          onPress={this.maleSelection}
          backgroundColor={this.props.user.settings.feedbackGender.male ? maleColors.color: standardColors.color}
          backgroundDarker = {this.props.user.settings.feedbackGender.male ? maleColors.backgroundColor: standardColors.backgroundColor}
        >
          <Image
            source={require("../assets/male.png")}
            resizeMode="center"
            style={{ height: 64, width: 35 }}
          />
        </AwesomeButton>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user 
});

const mapDispatchToProps = (dispatch) => ({
  changeUser: (user) => dispatch(changeUser(user))
});

export default connect(mapStateToProps,mapDispatchToProps) (PartnerSexSelector);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between", 
    marginLeft: 80,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 80
  },
  buttons: {
    width: 50,
    height: 50
  }
});

const standardColors = {
  color: "#c5bdcc",
  backgroundColor:  "#9e95a5",
}

const femaleColors = {
  color: "#d856cb",
  backgroundColor:  "#a33f99",
}

const maleColors = {
  color: "#3d79db",
  backgroundColor:  "#224d93",
}