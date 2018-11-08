import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import MainAppNavigator from "./navigators/MainNavigation";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './redux/reducers/reducers';

const store = createStore(reducers);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store}>
      <MainAppNavigator></MainAppNavigator>
      </Provider>
    )
  }
}

