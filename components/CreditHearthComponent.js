import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { changeCredits } from '../redux/actions/actions';

const heartColors = {
  activated: '#df1b24',
  deactivated: '#c37175',
}

class CreditHearthComponent extends Component {
  constructor(props) {
    super(props);
  }

  handlePress = () => {
    this.props.navigator.navigate("HearthScreen");
  }

  render() {
    let activated = this.props.credits >= 10;
    console.log('activated: ', activated, "  credits: ", this.props.credits)
    return (
      <View style={styles.container}>
      <TouchableOpacity  onPress={this.handlePress}>
      <Ionicons style={styles.icon} raised = {true} name="ios-heart" size={32}  color={activated ? heartColors.activated : heartColors.deactivated } />
      {activated && <View style={styles.circle}>
      <Text style={styles.text}>{Math.floor(this.props.credits / 10)}</Text>
      </View>}
      </TouchableOpacity> 
      </View>  
    );
  }
}

const mapStateToProps = (state) => ({
  credits: state.user.credits
});

const mapDispatchToProps = (dispatch) => ({
  changeCredits: (credits) => dispatch(changeCredits(credits))
});

export default connect(mapStateToProps,mapDispatchToProps) (CreditHearthComponent);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  text: {
    color: "white"
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