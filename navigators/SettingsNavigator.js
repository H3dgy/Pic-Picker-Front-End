import AppSettingsScreen from "../screens/AppSettingsScreen";
import {createStackNavigator} from "react-navigation";
import TopNavigationOptions from "./helpers/TopNavigationOptions"

const SettingsStackNavigator = createStackNavigator({
  SettingsNavigator: {
    screen: AppSettingsScreen,
    navigationOptions: ({navigation}) => TopNavigationOptions(navigation)
  }
});

export default SettingsStackNavigator