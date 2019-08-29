import React from 'react';
import { Platform } from 'react-native';

import { createStackNavigator, 
         createBottomTabNavigator, 
         createAppContainer,
         createSwitchNavigator 
} from 'react-navigation';

import SignIn from './components/auth';
import Games from './components/games';
import News from './components/news';

const AppStack = createBottomTabNavigator({
  News: News,
  Games: Games
});

const AuthStack = createStackNavigator({
  SignIn: SignIn
}, {
  headerMode: 'none'
});

export const RootNavigator = () => {
  return createAppContainer(createSwitchNavigator({
    App: AppStack,
    Auth: AuthStack
  }, {
    initialRouteName: 'Auth'
  }))
}