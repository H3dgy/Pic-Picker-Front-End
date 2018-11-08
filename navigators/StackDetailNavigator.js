
import {createStackNavigator} from "react-navigation";
import StatsDetailScreen from "../screens/StatsDetailScreen";
import AppStatsScreen from "../screens/AppStatsScreen"

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


