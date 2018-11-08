import LogOutScreen from "../screens/LogOutScreen";
import {createStackNavigator} from "react-navigation";
import TopNavigationOptions from "./helpers/TopNavigationOptions"


const LogOutStackNavigator = createStackNavigator({
  SettingsNavigator: {
    screen: LogOutScreen,
    navigationOptions: ({navigation}) => TopNavigationOptions(navigation)
  }
});



export default LogOutStackNavigator;