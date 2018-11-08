import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import AuthLoadingScreen from "./screens/AuthLoadingScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import AppHomeScreen from "./screens/AppHomeScreen";
import StackDetailNavigator from "./navigators/StackDetailNavigator";
import AppSettingsScreen from "./screens/AppSettingsScreen";
import LogOutScreen from "./screens/LogOutScreen";
import CreditHearthComponent from "./components/CreditHearthComponent";
import CreditHearthScreen from "./screens/CreditHearthScreen"

import {
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator,
  createBottomTabNavigator
} from "react-navigation";

import Icon from "react-native-vector-icons/Ionicons";

/**
 * switchNavigator - one SCREEN at one time
 * 1. Loading screen
 * 2. Authentication StackNavigator
 * 3. App Tab Navigator
 */

const activeTabScreen = "Home";

const AuthStackNavigator = createStackNavigator({
  Welcome: WelcomeScreen,
  SignUp: SignUpScreen,
  SignIn: SignInScreen
});

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



const AppStackNavigator = createStackNavigator({
  AppBottomTabNavigator: {
    screen: AppBottomTabNavigator,
    navigationOptions: (navigation) => TopNavigationOptions({navigation})
  },
  HearthScreen: {
    screen: CreditHearthScreen
  }
});

const SettingsStackNavigator = createStackNavigator({
  SettingsNavigator: {
    screen: AppSettingsScreen,
    navigationOptions: (navigation) => TopNavigationOptions({navigation})
  }
});

const LogOutStackNavigator = createStackNavigator({
  SettingsNavigator: {
    screen: LogOutScreen,
    navigationOptions: (navigation) => TopNavigationOptions({navigation})
  }
});

const AppDrawerNavigator = createDrawerNavigator({
  Home: AppStackNavigator,
  Settings: SettingsStackNavigator,
  LogOut: LogOutStackNavigator
});

export default createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStackNavigator,
  App: AppDrawerNavigator
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  menuButton: {
    marginLeft: 40,
    marginRight: 40
  }
});

const TopNavigationOptions = (navigation) => (
  {
    title: "App",
    headerLeft: (
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <View>
          <Icon name="md-menu" size={24} style={styles.menuButton} />
        </View>
      </TouchableOpacity>
    ),
    headerRight: (
        <View style={{ marginRight: 30 }}>
        <CreditHearthComponent navigator={navigation}/>
        </View>
    )
  }
)