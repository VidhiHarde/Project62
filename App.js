import * as React from 'react';
import { View, Text } from 'react-native';
import HomeScreen from './screen/HomeScreen';
import JokeScreen from './screen/JokeScreen';
import HeroscopeScreen from './screen/HeroscopeScreen';
import WeatherScreen from './screen/WeatherScreen';
import NewsScreen from './screen/NewsScreen';
import AppHeader from './components/AppHeader';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default class App extends React.Component {


  render() {
    return (
      <View>
        <AppContainer />
        <AppHeader />
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  JokeScreen: JokeScreen,
  NewsScreen: NewsScreen,
  HeroscopeScreen: HeroscopeScreen,
  WeatherScreen: WeatherScreen,
});

const AppContainer = createAppContainer(AppNavigator);
