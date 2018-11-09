import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity} from "react-native";
import AddPictureButton from "../components/AddPictureButton";

import { connect } from 'react-redux';
import { changeImageList, changeActive } from '../redux/actions/actions';
import StatSummaryComponent from "../components/StatSummaryComponent";
 
const SCREEN_WIDTH = Dimensions.get("window").width;

class AppStatsScreen extends Component {
  constructor(props) {
    super(props);
  }

  _pressHandler = (image) => {
    this.props.changeActive(image);
    this.props.navigation.navigate("StatsDetailScreen");
  }

  _renderPictures = () => {
    return this.props.imageList.map((item, i) => {
      console.log("picture uri: ", item.uri)
      return (
      <TouchableOpacity style = {{width: SCREEN_WIDTH, marginTop: 20, marginLeft: 10, marginRight: 10, marginBottom: 10}} onPress={() => this._pressHandler(item)}>
        <StatSummaryComponent key={item.id} uri={item.uri} data={item.data}></StatSummaryComponent>
      </TouchableOpacity>
      )
    })
   
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: "white", padding: 10 }}>
        <View style={styles.container}>
          <AddPictureButton/>
          <View>
          {this._renderPictures()}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({
  imageList: state.images.imageList
});

const mapDispatchToProps = (dispatch) => ({
  changeImageList: (imageList) => dispatch(changeImageList(imageList)),
  changeActive: (image) => dispatch(changeActive(image))
});

export default connect(mapStateToProps,mapDispatchToProps) (AppStatsScreen);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SCREEN_WIDTH,
    alignItems: "center",
    justifyContent: "flex-start",
  }
});
