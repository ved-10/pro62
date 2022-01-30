import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class ImageScreen extends React.Component {
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
        <Text style={styles.head}>The World's Most Interesting News</Text>
        <Text style={styles.textStyle}>
       Reading news is Boring!!!! So watch our news on television.
       For our channel ask your service provider to add InvalidNews for only 1 Rupee

      
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  back: {
    width: 30,
    height: 30,
    marginBottom: 50,
  },
   textStyle: {
     textAlign: 'center',
     fontSize: 25,
    marginBottom: 15,
    fontWeight: 'bold',
    fontamily: 'cursive'
  },
  head: {
    textAlign: 'center',
    fontSize:  '30',
    fontWeight: 'bold',
    marginBottom: 40,
    backgroundColor: 'yellow',
    marginTop: -30
  },
});
