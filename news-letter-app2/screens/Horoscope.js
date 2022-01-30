import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default class Horoscope extends React.Component {
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
        <Text style={styles.head}>Horoscope of today</Text>
        <Text style={styles.textStyle}>
         No need of Horoscope .Everyday is diffirent and you will experience a great day today!!!!.                                                                       (I guess🤞😁)
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    marginBottom: 15,
    fontWeight: 'bold',
    fontfamily: 'cursive',
    fontSize: 20,
  },
  back: {
    width: 30,
    height: 30,
    marginBottom: 30,
  },
  head: {
    
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 40,
    backgroundColor: 'yellow',
    marginTop: -30
  },
});
