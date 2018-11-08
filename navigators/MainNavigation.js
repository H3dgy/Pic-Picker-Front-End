
import AuthLoadingScreen from "../screens/AuthLoadingScreen";
import CreditHearthScreen from "../screens/CreditHearthScreen"
import LogOutStackNavigator from "./LogOutNavigator";
import SettingsStackNavigator from "./SettingsNavigator";
import AppBottomTabNavigator from "./MainBottomNavigator";
import AuthStackNavigator from "./AuthNavigation";
import TopNavigationOptions from "./helpers/TopNavigationOptions"

import {
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator,
} from "react-navigation";

const AppStackNavigator = createStackNavigator({
  AppBottomTabNavigator: {
    screen: AppBottomTabNavigator,
    navigationOptions: ({navigation}) => TopNavigationOptions(navigation),
  },
  HearthScreen: {
    screen: CreditHearthScreen
  }
});

const AppDrawerNavigator = createDrawerNavigator({
  Home: AppStackNavigator,
  Settings: SettingsStackNavigator,
  LogOut: LogOutStackNavigator
});

const MainAppNavigator = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStackNavigator,
  App: AppDrawerNavigator
});

export default MainAppNavigator