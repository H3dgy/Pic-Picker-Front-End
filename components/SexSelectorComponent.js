import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import AwesomeButton from "react-native-really-awesome-button";
import { Image } from "react-native";
import { connect } from 'react-redux';
import { changeUser } from '../redux/actions/actions';


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

const bothColors = {
  color: "#9d4fd1",
  backgroundColor: "#733b99",
}

class SexSelector extends Component {
  constructor(props) {
    super(props);
  }

  sexSelection = (buttonID) => {
    const user = {...this.props.user};
    if (buttonID !== user.settings.gender) {
      user.settings.gender = buttonID;
      this._updateSettings(user);
    } else {
      user.settings.gender = "none";
      this._updateSettings(user);
    }
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
          onPress={this.sexSelection.bind(null,"female")}
          backgroundColor={("female" === this.props.user.settings.gender) ? femaleColors.color : standardColors.color}
          backgroundDarker = {("female" === this.props.user.settings.gender) ? femaleColors.backgroundColor : standardColors.backgroundColor}
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
          onPress={this.sexSelection.bind(null,"both")}
          backgroundColor={("both" === this.props.user.settings.gender) ? bothColors.color: standardColors.color}
          backgroundDarker = {("both" === this.props.user.settings.gender) ? bothColors.backgroundColor: standardColors.backgroundColor}
        >
          <Image
            source={require("../assets/both.png")}
            style={{ height: 60, width: 60 }}
          />
        </AwesomeButton>

        <AwesomeButton
          width={80}
          height={80}
          borderRadius={40}
          onPress={this.sexSelection.bind(null,"male")}
          backgroundColor={("male" === this.props.user.settings.gender) ? maleColors.color: standardColors.color}
          backgroundDarker = {("male" === this.props.user.settings.gender) ? maleColors.backgroundColor: standardColors.backgroundColor}
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

export default connect(mapStateToProps,mapDispatchToProps) (SexSelector);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between", 
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 20
  },
  buttons: {
    width: 50,
    height: 50
  }
});
