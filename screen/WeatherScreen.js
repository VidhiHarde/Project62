import * as React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

export default class WeatherScreen extends React.Component {
render(){
  return(
      <View>
        <View style={[styles.screen, { backgroundColor: 'violet' }]}>
          <Text style={styles.infoText}> Wheather Report </Text>
        </View>

        <Image
          style={{ width: 350, height: 350, marginLeft: -10, marginTop: 1 }}
          source={require('./assets/Weather.png')}
        />
     </View>
  )

          
  }
}

const styles =StyleSheet.create({
screen:{
  justifyContent : 'center',
    alignSelf : 'center',
    borderWidth : 4,
    borderRadius : 20,
    marginTop:35,
    width : 250,
    height:70,
},
infoText:{
  textAlign:'center',
  color:"black"
}
  
})


