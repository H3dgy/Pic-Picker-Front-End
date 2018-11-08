
import SignUpScreen from "../screens/SignUpScreen";
import SignInScreen from "../screens/SignInScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import {createStackNavigator} from "react-navigation";


const AuthStackNavigator = createStackNavigator({
  Welcome: WelcomeScreen,
  SignUp: SignUpScreen,
  SignIn: SignInScreen
});

export default AuthStackNavigator