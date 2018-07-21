import React from 'react';
import LoginScreen from "../pages/login/index";
import MainScreen from './NavigationConfig';
import { createStackNavigator } from "react-navigation";
const Navigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      key: 'Login',
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    },
    Main: {
      screen: MainScreen,
      key: 'Main',
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    },
  },{
    initialRouteName: 'Login',
  }
)

export default Navigator;