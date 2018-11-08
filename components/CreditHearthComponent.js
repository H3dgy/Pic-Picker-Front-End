import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const heartColors = {
  activated: '#df1b24',
  deactivated: '#c37175',
}

class CreditHearthComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activated: false
    }
  }

  handlePress = () => {
    this.props.navigator.navigate("HearthScreen");
  }

  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity  onPress={this.handlePress}>
      <Ionicons style={styles.icon} raised = {true} name="ios-heart" size={32}  color={this.state.activated ? heartColors.activated : heartColors.deactivated } />
      <View style={this.state.activated ? styles.hiddenCircle : styles.circle}>
      <Text style={styles.text}>10</Text>
      </View>
      </TouchableOpacity> 
      </View>  
    );
  }
}

export default CreditHearthComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  text: {
  },
  icon: {
    width: 32,
    height: 32,
  },
  circle: {
    position: 'absolute',
    opacity: 100,
    left: 14,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'grey',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  hiddenCircle: {
    position: 'absolute',
    opacity: 0,
    left: 14,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'grey',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});