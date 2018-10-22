import React from 'react'
import { Animated, Easing } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import {
    reduxifyNavigator,
    createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import LoginScreen from '../components/LoginScreen.js'
import HomeScreen from '../components/HomeScreen.js'
import Screen1 from '../components/Screen1.js'
import Screen2 from '../components/Screen2.js';
import Screen3 from '../components/Screen3.js'
import Screen4 from '../components/Screen4.js'
import Screen5 from '../components/Screen5.js'

const middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav
);

const noTransitionConfig = () => ({
    transitionSpec: {
        duration: 0,
        timing: Animated.timing,
        easing: Easing.step0
    }
})

const RootNavigator = createStackNavigator({
    Login: { screen: LoginScreen },
    Home: { screen: HomeScreen },
    Screen1: { screen: Screen1 },
    Screen2: { screen: Screen2 },
    Screen3: { screen: Screen3 },
    Screen4: { screen: Screen4 },
    Screen5: { screen: Screen5 },
}, {initialRouteName: 'Home', navigationOptions: {
    headerStyle: {
      backgroundColor: '#5d8be2',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },transitionConfig: noTransitionConfig });
  
const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
    state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, middleware };