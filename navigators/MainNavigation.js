import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
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
import Icon from "react-native-vector-icons/Ionicons";
import {
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator,
  createBottomTabNavigator
} from "react-navigation";



/**
 * switchNavigator - one SCREEN at one time
 *  Navigation shown in order of flow through the app
 */

const activeTabScreen = "Home";

// 1. Navigation for authentication flow

const AuthStackNavigator = createStackNavigator({
  Welcome: WelcomeScreen,
  SignUp: SignUpScreen,
  SignIn: SignInScreen
});

// 2. Main stack navigator for functionality app
const AppStackNavigator = createStackNavigator({
  AppBottomTabNavigator: {
    screen: AppBottomTabNavigator,
    navigationOptions: (navigation) => TopNavigationOptions({navigation})
  },
  HearthScreen: {
    screen: CreditHearthScreen
  }
});

// 2.a drawer navigation for option icon

const AppDrawerNavigator = createDrawerNavigator({
  Home: AppStackNavigator,
  Settings: SettingsStackNavigator,
  LogOut: LogOutStackNavigator
});

// 2.b Tab Navigation on bottom of screen in main app use
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

// 3. Settings navigation 
const SettingsStackNavigator = createStackNavigator({
  SettingsNavigator: {
    screen: AppSettingsScreen,
    navigationOptions: (navigation) => TopNavigationOptions({navigation})
  }
});

// 4. Log out navigator

const LogOutStackNavigator = createStackNavigator({
  SettingsNavigator: {
    screen: LogOutScreen,
    navigationOptions: (navigation) => TopNavigationOptions({navigation})
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

const mainAppNavigator = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStackNavigator,
  App: AppDrawerNavigator
});

export default mainAppNavigator


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
