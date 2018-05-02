import React, { Component } from 'react';
import { View, Animated, PanResponder, Dimensions, UIManager, LayoutAnimation } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;

class Deck extends Component {
  static defaultProps = {
    onSwipeRight: () => {},
    onSwipeLeft: () => {}
  }

  constructor(props){
    super(props);

    // Handles the animation caused by the dragging
    const position = new Animated.ValueXY();

    // Handles the user's finger drag movement
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        /*
        x = dx
        y = dy
        dx, dy can be derived from gesture
        Allows you to update the current position of finger with the current readings from gesture
        */
        position.setValue({x: gesture.dx, y: gesture.dy})
      },

      onPanResponderRelease: (event, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD){
          this.forceSwipe('right');
        }

        else if (gesture.dx < -SWIPE_THRESHOLD) {
          this.forceSwipe('left');
        }

        else {
          this.resetPosition();
        }
      }
    });

    this.state = { panResponder, position, index: 0 };
  }

  //Calls when component is going to be rerendered with a new set of props
  componentWillReceiveProps(nextProps){
    if(nextProps.data !== this.props.data){
      this.setState({ index: 0 });
    }
  }

  componentWillUpdate(){
    //For Android
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    //Allows animation to be smoother when cards move upwards
    LayoutAnimation.spring();
  }

  //On release of finger, card's position onscreen resets back to original position
  resetPosition(){
    Animated.spring(this.state.position, {
      toValue: { x: 0, y: 0 }
    }).start();
  }

  //Duration is in milliseconds
  forceSwipe(direction){
    //If direction = right, return SCREEN_WIDTH
    //If direction = left, return -SCREEN_WIDTH
    const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
    Animated.timing(this.state.position, {
      toValue: { x , y: 0 },
      duration: SWIPE_OUT_DURATION
    }).start(() => this.onSwipeComplete(direction));
  }

  onSwipeComplete(direction){
    const { onSwipeLeft, onSwipeRight, data } = this.props;
    /*
    Indicates that this.props.data is the current item
    Goes into the array of data
    Assign the index no. to the item
    */
    const item = data[this.state.index];

    //if direction = right, return onSwipeRight
    direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item);
    this.state.position.setValue({x: 0, y: 0});
    this.setState({index: this.state.index + 1});
  }

  getCardStyle(){

    const { position } = this.state;

    /*
    Sliding animation
    */

    const rotate = position.x.interpolate({

      /*
      Allows component to rotate according to the screen size of different devices
      Enables dynamism across devices of different screen sizes
      To decrease rotation: SCREEN_WIDTH * 1.5
      */

      inputRange: [-SCREEN_WIDTH, 0, SCREEN_WIDTH],
      outputRange: ['-120deg', '0deg', '120deg']

    });

    return {
      ...position.getLayout(),
      transform: [{ rotate }]
    };
  }

  renderCards() {
    if (this.state.index >= this.props.data.length){
      return this.props.renderNoMoreCards();
    }

    return this.props.data.map((item, i) => {
      if (i < this.state.index) { return null; }

      if (i === this.state.index) {
        return (
          <Animated.View
            key={item.id}
            style = {[this.getCardStyle(), styles.cardStyle]}
            {...this.state.panResponder.panHandlers}
            >
              {this.props.renderCard(item)}
          </Animated.View>
        )
      }

      return (
        <Animated.View
          key = {item.id}
          style={[styles.cardStyle, { top: 10 * (i - this.state.index) }]}

          >
          {this.props.renderCard(item)}
        </Animated.View>
      );
    }).reverse();
  }

  render () {
    return(
      <View>
        {this.renderCards()}
      </View>
    )
  }
}

const styles = {
  cardStyle: {
    position: 'absolute',
    width: SCREEN_WIDTH
  }
};

export default Deck;
