import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Button} from 'native-base'

var myBackground = require('../assets/img/landing.jpg');

export default class Landing extends React.Component{
  render(){
    return(
      <View>
        <Image source={myBackground}>
          <View style={styles.viewStyle}>
            <Text
              style={styles.titleStyle}
              >
              Bienvenue dans le Pokédex!</Text>
              <Button
                block={true}
                style={styles.buttonStyle}
                onPress={()=>this.props.switchScreen("search")}
                >
                <Text style={styles.buttonText}> Recherche </Text>
              </Button>
          </View>
        </Image>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  viewStyle:{
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleStyle: {
    fontSize: 20,
    color: 'blue',
    alignItems: 'center',
  },
  buttonStyle: {
    margin: 10
  },
  buttonText: {
    color: 'white'
  }
});
