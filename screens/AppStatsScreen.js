import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import StatPictureComponent from "../components/StatPictureComponent";
import AddPictureButton from "../components/AddPictureButton";
import { connect } from 'react-redux';
import { changeImageList } from '../redux/actions/actions';

class AppStatsScreen extends Component {
  constructor(props) {
    super(props);
  }

  _renderPictures = () => {
    return this.props.imageList.map((item, i) => {
      return ( <StatPictureComponent id={item.id} image={item} navigation={this.props.navigation}/>)
    })
   
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: "white" }}>
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
  changeImageList: (imageList) => dispatch(changeImageList(imageList))
});

export default connect(mapStateToProps,mapDispatchToProps) (AppStatsScreen);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  }
});
