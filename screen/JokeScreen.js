import * as React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

export default class JokeScreen extends React.Component {
render(){
  return(
      <View>
        <View style={[styles.screen, { backgroundColor: 'yellow' }]}>
          <Text style={styles.infoText}> Today's Jokes 😂😂 </Text>
        </View>

        <Image
          style={{ width: 280, height: 300, marginLeft: 30, marginTop: 50 }}
          source={require('./assets/Joke.jpg_large')}
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
    marginTop:20,
    width : 200,
    height:70,
  
},
infoText:{
  textAlign:'center',
  color:"black"
}
  
})


