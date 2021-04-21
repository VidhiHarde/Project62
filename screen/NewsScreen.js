import * as React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

export default class NewsScreen extends React.Component {
render(){
  return(
      <View>
        <View style={[styles.screen, { backgroundColor: 'skyblue' }]}>
          <Text style={styles.infoText}> Top News 📰 </Text>
        </View>

        <Image
          style={{ width: 450, height: 350, marginLeft: -60, marginTop: 5}}
          source={require('./assets/News.png')}
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
    width : 250,
    height:70,
},
infoText:{
  textAlign:'center',
  color:"black"
}
  
})


