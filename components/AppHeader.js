import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View style= {[styles.box ,{backgroundColor:"crimson", marginTop: -560}]}>
        <Text style={styles.text}>My NewsLetter App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box:{
    backgroundColor: 'crimson',
    
  },
  text:{
    color: 'white',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default AppHeader;