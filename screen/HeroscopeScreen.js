import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class HeroscopeScreen extends React.Component {
  render() {
    return (
      <View>
        <View style={[styles.screen, { backgroundColor: 'yellow' }]}>
          <Text style={styles.infoText}> Check Your Horoscope 😊 </Text>
        </View>

        <Image
          style={{ width: 280, height: 210, marginLeft: 30, marginTop: 50 }}
          source={require('./assets/Horoscope.jpg')}
        />
     </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 4,
    borderRadius: 20,
    marginTop: 50,
    width: 250,
    height: 70,
  },

  infoText: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
});
