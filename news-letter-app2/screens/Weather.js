import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default class Weather extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('HomeScreen');
          }}>
          <Image
            style={styles.back}
            source={require('../assets/backButton.png')}
          />
        </TouchableOpacity>
        <Text style={styles.head}>Weather</Text>
        <Text style={styles.textstyle}>If you are feeling hot then it is hot day. 
        if feeling cold then it is a cold day. 
        Open your window and if water is coming down then it raing if iceballs is falling then its a hail storm and if snow is falling then its a snowy day.                                     
         By the way pandemic is not yet over watch our news and stay at home!!!!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  textstyle: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  back: {
    width: 30,
    height: 30,
    marginBottom: 50
  },
  head: {
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 10,
    backgroundColor: 'yellow',
    marginTop: -30
  }
});
