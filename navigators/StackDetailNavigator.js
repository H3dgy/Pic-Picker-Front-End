import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView} from "react-native";
import AwesomeButton from "react-native-really-awesome-button";
import Icon from "react-native-vector-icons/Ionicons";
import StatPictureComponent from "../components/StatPictureComponent";
import {
  createStackNavigator,
} from "react-navigation";
import StatsDetailScreen from "../screens/StatsDetailScreen";

const standardColors = {
  color: "#c5bdcc",
  backgroundColor:  "#9e95a5",
}

class AppStatsScreen extends Component {
  constructor(props) {
    super(props);
  }

  addPicture = () => {

  }
  render() {
    return (
      <ScrollView centerContent={true} style={{backgroundColor: 'white'}}>
        <View style={styles.container}>
        <AwesomeButton
        width={50}
        height={50}
        borderRadius={25}
          onPress={this.addPicture}
          backgroundColor={standardColors.color}
          backgroundDarker={standardColors.backgroundColor}
          style={{marginBottom: 10, marginTop: 20}}
        >
        <Icon name="ios-add" size={34} color={'white'}/>
        </AwesomeButton>
        <StatPictureComponent navigation={this.props.navigation}></StatPictureComponent>
        {/* <StatPictureComponent></StatPictureComponent>
        <StatPictureComponent></StatPictureComponent>
        <StatPictureComponent></StatPictureComponent> */}
        </View>
      </ScrollView>
    );
  }
}

// class StatsDetailScreen extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <View >
//           <Text>StatsPictureScreen</Text>
//       </View>
//     );
//   }
// }

const StackDetailNavigator = createStackNavigator({
  AppStatsScreen: AppStatsScreen,
  StatsDetailScreen: StatsDetailScreen,
}, {
  navigationOptions: {
  header: null,
  }
});

// Add stack navigator to this screen and should have props in the components 

export default StackDetailNavigator;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});


