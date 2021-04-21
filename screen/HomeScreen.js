import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import AppHeader from '../components/AppHeader';
import db from '../Config';

export default class HomeScreen extends React.Component {
  navigation = () => {
    this.props.navigation.navigate('JokeScreen');
  };
  navigation = () => {
    this.props.navigation.navigate('HeroscopeScreen');
  };
  navigation = () => {
    this.props.navigation.navigate('NewsScreen');
  };
  navigation = () => {
    this.props.navigation.navigate('WeatherScreen');
  };
  likePressed() {
    var like = db.ref('Rating/' + '/');
    like.update({
      likePressed: +1,
    });
  }
  dislikePressed() {
    var dislike = db.ref('Rating/' + '/');
    dislike.update({
      dislikePressed: +1,
    });
  }
  constructor() {
    super();
    this.state = {
      like: 0,
      dislike: 0,
    };
  }
  likecount = () => {
    this.setState({ like: this.state.like + 1 });
  };
  dislikecount = () => {
    this.setState({ dislike: this.state.dislike + 1 });
  };

  render() {
    return (
      <View>
        <TouchableOpacity
          style={[
            styles.buttonContainer,
            { backgroundColor: 'pink', marginTop: 100 },
          ]}
          onPress={() => this.props.navigation.navigate('JokeScreen')}>
          <Text style={[styles.buttontext]}>😜 Read A Joke 😜</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.buttonContainer,
            { backgroundColor: 'skyblue', marginTop: 10 },
          ]}
          onPress={() => this.props.navigation.navigate('NewsScreen')}>
          <Text style={[styles.buttontext]}>🗞️Must Read Some News 🗞️ </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.buttonContainer,
            { backgroundColor: 'violet', marginTop: 10 },
          ]}
          onPress={() => this.props.navigation.navigate('WeatherScreen')}>
          <Text style={[styles.buttontext]}>
            🌦️What About Today's Weather 🌦️
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.buttonContainer,
            { backgroundColor: 'yellow', marginTop: 10 },
          ]}
          onPress={() => this.props.navigation.navigate('HeroscopeScreen')}>
          <Text style={[styles.buttontext]}>
            🙋🏻‍Try Reading About Yourself 🙋🏻
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.ratingContainer}>
          <Text
            style={{
              margin: 5,
              textAlign: 'center',
              padding: 20,
              fontSize: 22,
              fontWeight: 'bold',
            }}>
            Rate Us
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.likecount}>
          <Image
            style={{ width: 50, height: 50, marginLeft: 70 }}
            source={require('../assets/thumbsup.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.dislikecount}>
          <Image
            style={{ width: 50, height: 50, marginLeft: 200, marginTop: -40 }}
            source={require('../assets/thumbsdown.png')}
          />
        </TouchableOpacity>
        <Text style={{ marginTop: -1, marginLeft: 90, fontWeight: 'bold' }}>
          {this.state.like}
        </Text>
        <Text style={{ marginTop: -14.5, marginLeft: 220, fontWeight: 'bold' }}>
          {this.state.dislike}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 4,
    borderRadius: 20,
    marginTop: 50,
    width: 250,
    height: 70,
  },
  buttontext: {
    textAlign: 'center',
  },
});
