import AppHomeScreen from "../screens/AppHomeScreen";
import StackDetailNavigator from "./StackDetailNavigator";
import {createBottomTabNavigator} from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import React from "react";

const activeTabScreen = "Home";

const AppBottomTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: AppHomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-photos" color={tintColor} size={24} />
        )
      }
    },
    Stats: {
      screen: StackDetailNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-stats" color={tintColor} size={24} />
        )
      }
    }
  },
  {
    initialRouteName: activeTabScreen,
    order: ["Home", "Stats"],
    navigationOptions: {
      tabBarVisible: true
    },
    tabBarOptions: {
      activeTintColor: "red",
      inactiveTintColor: "grey"
    }
  }
);

export default AppBottomTabNavigator;