import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default class JokeScreen extends React.Component {
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
        <Text style={styles.head}>Lame Jokes Corner</Text>
 <Text style={styles.center}>1)What́ ́ís the most expensive streaming service the moment                                                                                      Ans: College</Text>
      <Text style={styles.center}>2)  Why are leopards not good at playing hide and seek?                                                                        Ans: They are always spotted.</Text>
       <Text style={styles.center}>3)  What do you call a bull when they fall asleep?                                                                         Ans: A bull-dozer.</Text>
     <Text style={styles.center}>4)  Which animal plays sports all the time?                                                                        Ans: A bat.</Text>

      <Text style={styles.center}>5)  What happened to the toad who left the forest?                                                                        Ans: A was Froggotten.</Text>
      </View>
      

     
    );
  }
}

const styles = StyleSheet.create({
  
  back: {
    width: 30,
    height: 30,
    marginBottom: 28,
  },

  img: {
    marginLeft:10,
    width: 290,
    height: 150,
   
  },
  
  text: {
    fontSize: 20,
    color: 'yellow',
    marginBottom: 15,
    fontWeight: 'bold',
    backgroundColor: 'blue'
},

  head: {
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 40,
    backgroundColor: 'yellow',
    marginTop: -30,
    fontWeight: 'bold',
  },
});


 

