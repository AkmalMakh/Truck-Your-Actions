import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TrackCreateScreen from './src/screens/TrackCreateScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import AccountScreen from './src/screens/AccountScreen';

const switchNavigator = createSwitchNavigator({
    loginFlow: createStackNavigator({
      Signup: SignupScreen,
      Signin: SigninScreen
    }),
    mainFlow: createBottomTabNavigator({
      trackListFlow: createStackNavigator({
        TrackList: TrackListScreen,
        TrackDetail: TrackDetailScreen
      }),
      TrackCreate: TrackCreateScreen,
      Account: AccountScreen
    })
});

export default createAppContainer(switchNavigator);