/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'
import {LayoutAnimation, StyleSheet, Platform, View, Animated, Easing, TouchableOpacity, Text, BackHandler } from 'react-native'
import { connect } from 'react-redux'
import Orientation from 'react-native-orientation'
import Carousel from 'react-native-snap-carousel';
import firebase, { Notification, NotificationOpen } from 'react-native-firebase';
import { orientationChange, mainCardsIndex } from '../actions/main'
import Colors from './common/Colors'
import Card from './common/Card';
import CardModal from './modal/CardModal'
import BeerMenu from './cards/BeerMenu';
import FoodTrucks from './cards/FoodTrucks';
import Restaurants from './cards/Restaurants';
import Events from './cards/Events';
import { isIphoneXorAbove } from '../utils/utils';
import { InboxNew } from './icons';
import Messages from './cards/Messages';
import { addMessage, clearOpenedNotification, showOpenedNotification, processMessage } from '../actions/notifications';
import CardDetailModal from './modal/CardDetailModal';
import MessageItem from './cards/MessageItem';

type Props = {};
class MainView extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      showBeerMenu : false,
      showFoodTrucks : false,
      showRestaurants : false,
      showEvents : false,
      showMessages : false,
      carouselWidth : 275,
      expandedIndex : 0,
      expanded : false,
    };
    this._visibility = {
      0 : new Animated.Value(0),
      1 : new Animated.Value(0),
      2 : new Animated.Value(1),
      3 : new Animated.Value(1),
      4 : new Animated.Value(1),
      5 : new Animated.Value(1),
    };

    this._carouselWidth = new Animated.Value(this.state.carouselWidth)
    this._height = new Animated.Value(75)
  }

  requestPermissions = async() => {
      const enabled = await firebase.messaging().hasPermission();
      if (!enabled) {
        try {
            await firebase.messaging().requestPermission();
        } catch(e) {
            Alert.alert(
              'Push Notifications',
              'It seems push notification permissions have been disabled\n\nPlease re-enable them in the Settings app?',
              [
                { text : 'OK'},
              ],
              { cancelable : true },
            );
        }
      }
  }
  
  componentWillReceiveProps(nextProps) {
    if(this._carousel && this._carousel.currentIndex != nextProps.cardIndex) {
        this._carousel.snapToItem(nextProps.cardIndex)
    }
  }

  async componentDidMount() {
    const { authenticated } = this.props
    
    Orientation.addSpecificOrientationListener(this.orientationDidChange);
    Orientation.addSensorBaseOrientationListener(this._sensorBaseOrientationChange);

    if(authenticated) {
      this.requestPermissions()
    }
    
    this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
      //('notificationOpenedListener', notificationOpen)
      const notification = notificationOpen.notification;

      this.props.addMessage({ notificationId: notification.notificationId, title: notification.title, body: notification.body, ...notification.data }, true)
    });

    this.notificationDisplayedListener = firebase.notifications().onNotificationDisplayed((notification) => {
      //console.log('notificationDisplayedListener', notification)
      this.props.addMessage({ notificationId: notification.notificationId, title: notification.title, body: notification.body, ...notification.data })
    });
    
    this.notificationListener = firebase.notifications().onNotification((notification) => {
     //console.log('onNotification', notification)
      this.props.addMessage({ notificationId: notification.notificationId, title: notification.title, body: notification.body, ...notification.data })
    });

    const notificationOpen = await firebase.notifications().getInitialNotification();
    if (notificationOpen) {
      //console.log('notificationOpen', notificationOpen)
        const notification = notificationOpen.notification;
        this.props.addMessage({ notificationId: notification.notificationId, title: notification.title, body: notification.body, ...notification.data }, true)
    }

    this.messageListener = firebase.messaging().onMessage((message) => {
      this.props.processMessage(message)
      
  });

/*     setTimeout(()=> {
      const message = {
        archive: false,
        body: "Body 1235",
        end: "1548896986",
        id: "0:1560385504683997%a4e90077a4e90077",
        photo: "elements/element__bisco--lg.jpg",
        title: "Yolo 12354",
        topic: "Yolo",
        unread: true,
      }

      this.props.showOpenedNotification(message)
    }, 2000) */

    setTimeout(() => {
      const notification = {
        notificationId: '1234',
        data: {
            body: "Body 1235",
            end: "1548896986",
            photo: "elements/element__bisco--lg.jpg",
            start_on: "1548889786",
            subtitle: "Some sub title 12355",
            title: "Yolo 123545",
            topic: "Yolo",
          },
          body: "Body 1235",
          title: "Yolo 12345"
      }

      //this.props.addMessage({ notificationId: notification.notificationId, title: notification.title, body: notification.body, ...notification.data }, true)
    }, 2000)


    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      const { showBeerMenu, showFoodTrucks, showRestaurants, showEvents, showMessages } = this.state
      if(showBeerMenu || showFoodTrucks || showRestaurants || showEvents || showMessages || this.props.drawerOpen) {
        return false
      }

      BackHandler.exitApp()

      return true
    });
  }
  
  componentWillUnmount() {
    this.notificationOpenedListener();
    this.notificationDisplayedListener();
    this.notificationListener();
    this.backHandler.remove();
}
  orientationDidChange = (orientation) => {
    const animation = {...LayoutAnimation.Presets.easeInEaseOut, duration : 350 }

    LayoutAnimation.configureNext(animation);
    this.props.orientationChange(orientation)
  }
  _sensorBaseOrientationChange = (orientation) => {
    if(Platform.OS == 'android') {
      const animation = {...LayoutAnimation.Presets.easeInEaseOut, duration : 350 }

      LayoutAnimation.configureNext(animation);
      this.props.orientationChange(orientation)
    }
  }

    onCardPress = (index) => {
      if(index == 0) {
        this.setState({ showBeerMenu : true })
        //this.setState({ showEvents : true })
      }
      if(index == 1) {
        this.setState({ showFoodTrucks : true })
      }
      if(index == 2) {
        this.setState({ showRestaurants : true })
      }
      if(index == 3) {
        this.setState({ showEvents : true })
      }
    }

  onCardPressBroken = (index) => {
    const { expanded } = this.state 
    this.setState({ expanding : true })
    const easing = Easing.inOut(Easing.ease);
    const duration = 300
    Animated.parallel([
      Animated.timing(this._carouselWidth, {
        toValue: expanded ? 275 : 350,
        duration,
        easing
      }),
      Animated.timing(this._height, {
        toValue: expanded ? 75 : 95,
        duration,
        easing
      })
    ]).start()

    this._carouselWidth.addListener(({ value }) => {
      this.setState({ carouselWidth : value })
    })

    setTimeout(() => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      this.setState({ expanding : false, expanded : !expanded, expandedIndex : index })
      this._carousel.forceUpdate()
    }, duration + 100)
  }

  renderItem = ({item, index}) => {
    const { expanded, expanding, expandedIndex } = this.state

    const fadeStyle = {
      opacity: this._visibility[index].interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
      })
    }

    const heightStyle = {
      height : '100%',
    }
    return (
        <Animated.View style={[fadeStyle,  heightStyle ]}><Card item={item} expanding={expanding} expanded={expanded && expandedIndex == index} onDismissed={() => this.onCardPress(index)}  onCardPress={() => this.onCardPress(index) } onActionPress={() => this.onCardPress(index) } /></Animated.View>
    );
  }

  triggerRenderingHack = () => {
    const { cardIndex } = this.props

    if(this._carousel) {
      this._carousel.snapToItem(cardIndex, true);
      this._carousel.triggerRenderingHack()
    }
  }

  onSnapToItem = (cardIndex) => {
    this.props.mainCardsIndex(cardIndex)
  }

  toggleMessages = () => {
    const { showMessages } = this.state

    this.setState({ showMessages : !showMessages })
  }

  render () {
    const { showProfile, cardIndex, cards, unread, openedMessage, authenticated } = this.props
    const { showBeerMenu, showFoodTrucks, showRestaurants, showEvents, expanded, expanding, showMessages } = this.state
    const { inboxStyle } = styles


      
    const heightStyle = {
      height: this._height.interpolate({
        inputRange: [0, 1],
        outputRange: ['0%', '1%'],
      }),
    }
      
      return (
        <View style={[styles.container]}>
          <CardDetailModal itemView={MessageItem} onDisableSwipe={this.props.onDisableSwipe} isModalVisible={openedMessage != undefined} item={openedMessage} onDismissed={() => this.props.clearOpenedNotification()}/>
          {authenticated && !expanding && !expanded && 
            <TouchableOpacity style={{ flexDirection : 'row', position : 'absolute',  alignItems : 'center', justifyContent : 'center', bottom : 30, width : 150, height : 40, borderRadius : 40, backgroundColor : 'white', zIndex : 10 }} onPress={this.toggleMessages}>
              <InboxNew style={inboxStyle}  hasNew={unread > 0}/>
              <Text style={{ marginTop : 5, marginLeft : 10, fontFamily : 'TradeGothicLT-Light' }}>Messages</Text>
            </TouchableOpacity>
          }
          <Animated.View style={[heightStyle, { marginBottom : 15 }]}>
            <CardModal modalView={BeerMenu} isModalVisible={showBeerMenu} onDismissed={() => this.setState({ showBeerMenu : false })} title={cards[0].title} />
            <CardModal modalView={FoodTrucks} isModalVisible={showFoodTrucks} onDismissed={() => this.setState({ showFoodTrucks : false })} title={cards[1].title} />
            <CardModal modalView={Restaurants} isModalVisible={showRestaurants} onDismissed={() => this.setState({ showRestaurants : false })} title={cards[2].title} />
            <CardModal modalView={Events} isModalVisible={showEvents} onDismissed={() => this.setState({ showEvents : false })} title={cards[3].title} />
            <CardModal modalView={Messages} isModalVisible={showMessages} onDismissed={() => this.setState({ showMessages : false })} />
            <Carousel
              ref={(c) => { 
                if(!this._carousel) {
                  this._carousel = c;
                  this.triggerRenderingHack()
                  setTimeout(this.triggerRenderingHack, 250)
                  setTimeout(this.triggerRenderingHack, 500)
                  setTimeout(this.triggerRenderingHack, 600)
                  setTimeout(this.triggerRenderingHack, 700)
                  setTimeout(this.triggerRenderingHack, 800)
                  setTimeout(this.triggerRenderingHack, 1000)
                  setTimeout(this.triggerRenderingHack, 1250)
                  setTimeout(() => {
                    Animated.timing(this._visibility[0], {
                      toValue: 1,
                      duration: 100,
                    }).start();

                    Animated.timing(this._visibility[1], {
                      toValue: 1,
                      duration: 200,
                    }).start();
                  }, 1000)
                }
              }}
              data={cards}
              renderItem={this.renderItem}
              sliderWidth={400}
              scrollEnabled={!expanding && !expanded}
              useScrollView
              enableMomentum
              onSnapToItem={this.onSnapToItem}
              itemWidth={this.state.carouselWidth} />
          </Animated.View>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.LIGHT_GREY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inboxStyle : {
      height : 50,
      width : 20,
  },
});

const mapStateToProps = ({ authentication, notifications, main }) => {
  const { authenticated } = authentication
  const { messages, openedMessage } = notifications
  const unreadMessages = messages.filter(({ unread }) => unread)
  const unread = unreadMessages.length > 0

  const { showProfile, cardIndex, cards, drawerOpen } = main
  const { beer_dashboard, foodtrucks_dashboard, restaurants_dashboard, events_dashboard } = cards
  
  return { authenticated, drawerOpen, openedMessage, unread, showProfile, cardIndex, cards : [beer_dashboard, foodtrucks_dashboard, restaurants_dashboard, events_dashboard] }
}

export default connect(mapStateToProps, { orientationChange, mainCardsIndex, addMessage, processMessage, clearOpenedNotification, showOpenedNotification })(MainView)