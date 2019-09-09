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
import Article from './components/news/article';
import GamesArticle from './components/games/article';
import LogoTitle from './utils/logo';

const headerConf = {
  headerLayoutPreset: 'center',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#001338'
    },
    headerTintColor: 'white',
    headerTitle: LogoTitle
  }
}

const NewsStack = createStackNavigator({
  News: News,
  Article: Article
}, headerConf)

const GamesStack = createStackNavigator({
  Games: Games, 
  Article: GamesArticle
}, headerConf)

const AppStack = createBottomTabNavigator({
  News: NewsStack,
  Games: GamesStack
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