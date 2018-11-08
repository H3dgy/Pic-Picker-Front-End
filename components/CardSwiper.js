import React from "react";
import {
  StyleSheet,
  Dimensions,
  Image,
  View,
  PanResponder,
  Animated
} from "react-native";

import { connect } from 'react-redux';
import { changeCredits } from '../redux/actions/actions';


const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const images = [
  { id: "1", uri: require("../assets/testimages/testimage1.jpg") },
  { id: "2", uri: require("../assets/testimages/testimage2.jpg") },
  { id: "3", uri: require("../assets/testimages/testimage3.jpg") },
  { id: "4", uri: require("../assets/testimages/testimage4.jpg") }
];

class CardSwiper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: images,
      currentIndex: 0
    };

    this.position = new Animated.ValueXY();
    this.rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: ["-10deg", "0deg", "10deg"],
      extrapolate: "clamp"
    });

    this.rotateAndTranslate = {
      transform: [
        {
          rotate: this.rotate
        },
        ...this.position.getTranslateTransform()
      ]
    };

    this.likeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [0, 0, 1],
      extrapolate: "clamp"
    });

    this.dislikeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 0],
      extrapolate: "clamp"
    });

    this.nextCardOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 1],
      extrapolate: "clamp"
    });

    this.nextCardScale = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0.8, 1],
      extrapolate: "clamp"
    });
  }

  _claimCredits = () => {
    this.props.changeCredits(this.props.credits + 5);
  }

  componentWillMount() {
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gestureState) => true,
      onPanResponderMove: (e, gestureState) => {
        this.position.setValue({ x: gestureState.dx, y: gestureState.dy });
      },
      onPanResponderRelease: (e, gestureState) => {
        if(gestureState.dx>120) {
          Animated.spring(this.position, {
            toValue: {x: SCREEN_WIDTH + 100, y:gestureState.dy} 
          }).start(()=>{
            this.setState({currentIndex: this.state.currentIndex+1}), () => {
              this.position.setValue({x:0, y:0});
              this._claimCredits();
            }
          })
        }
        else if (gestureState.dx < -120) {
          Animated.spring(this.position, {
            toValue: {x: -SCREEN_WIDTH -100, y: gestureState.dy}
          }).start(() => {
            this.setState({currentIndex: this.state.currentIndex+1}, () => {
              this.position.setValue({x:0,y:0});
              this._claimCredits();
            })
          })
        }
      }
    });
  }

  renderImages = () => {
    return images
      .map((item, i) => {
        if (i < this.state.currentIndex) {
          return null;
        } else if (i === this.state.currentIndex) {
          return (
            <Animated.View
              {...this.PanResponder.panHandlers}
              key={item.id}
              style={[
                this.rotateAndTranslate,
                {
                  flex: 1,
                  height: SCREEN_HEIGHT - 170,
                  width: SCREEN_WIDTH,
                  position: "absolute",
                  paddingTop: 20,
                  paddingBottom: 20,
                  paddingLeft: 10,
                  paddingRight: 10
                }
              ]}
            >
              <Animated.View
                style={{
                  opacity: this.likeOpacity,
                  transform: [{ rotate: "-30deg" }],
                  position: "absolute",
                  top: 40,
                  left: 30,
                  zIndex: 1000
                }}
              >
                <Image
                  style={{
                    flex: 1,
                    height: 100,
                    width: 100
                  }}
                  source={require("../assets/smileys/1.png")}
                />
              </Animated.View>
              <Animated.View
                style={{
                  opacity: this.dislikeOpacity,
                  transform: [{ rotate: "30deg" }],
                  position: "absolute",
                  top: 40,
                  right: 30,
                  zIndex: 1000
                }}
              >
                <Image
                  style={{
                    flex: 1,
                    height: 100,
                    width: 100
                  }}
                  source={require("../assets/smileys/4.png")}
                />
              </Animated.View>
              <Image
                style={{
                  flex: 1,
                  height: null,
                  width: null,
                  resizeMode: "cover",
                  borderRadius: 20
                }}
                source={item.uri}
              />
            </Animated.View>
          );
        } else {
          return (
            <Animated.View
              key={item.id}
              style={[
                {
                  flex: 1,
                  height: SCREEN_HEIGHT - 170,
                  width: SCREEN_WIDTH,
                  position: "absolute",
                  paddingTop: 20,
                  paddingBottom: 20,
                  paddingLeft: 10,
                  paddingRight: 10
                },
                {
                  opacity: this.nextCardOpacity,
                  transform: [{ scale: this.nextCardScale }]
                }
              ]}
            >
              <Image
                style={{
                  flex: 1,
                  height: null,
                  width: null,
                  resizeMode: "cover",
                  borderRadius: 20
                }}
                source={item.uri}
              />
            </Animated.View>
          );
        }
      })
      .reverse();
  };

  render() {
    return <View style={{ flex: 1 }}>{this.renderImages()}</View>;
  }
}

const mapStateToProps = (state) => ({
  credits: state.user.credits
});

const mapDispatchToProps = (dispatch) => ({
  changeCredits: (credits) => dispatch(changeCredits(credits))
});

export default connect(mapStateToProps,mapDispatchToProps) (CardSwiper);


const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
