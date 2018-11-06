import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';

export class Home extends Component {
  render() {
    return (<View style={styles.container}>
      <Text>Home</Text>
    </View>);
  }
}

export class Settings extends Component {
  render() {
    return <View style={styles.container}>
        <Text>Settings</Text>
      </View>;
  }
}

export default createBottomTabNavigator ({
  Home: Home,
  Settings: Settings
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
