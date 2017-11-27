import React from 'react';
import {ScrollView,Text,View,Image,Dimensions} from 'react-native';
import {ListItem,List} from 'native-base';

// Récuperer les Dimensions

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

export default class SearchBody extends React.Component{
  render(){

    var pokemon = this.props.data;
    if (!pokemon) {
        return <View/>
    }

    return(
        // View normal mais on peut scroll dessus
      <Image
        style={styles.backgroundImage}
        source={{uri: "https://mfiles.alphacoders.com/322/322158.png"}}
        >
        <ScrollView style={{flex:1}}>
          <Text style={styles.header}>#{pokemon.id} - {pokemon.name.toUpperCase()}</Text>
          <View style={styles.viewStyle}>
            <Image
               source={{uri: pokemon.sprites.front_default}}
               style={styles.img}
            />
          </View>
          <View style={styles.info}>
              <ListItem itemDivider>
                <Text style={{fontWeight: 'bold'}}>Dimensions</Text>
              </ListItem>
              <ListItem itemDivider>
                <Text>Poids - {pokemon.weight} kg</Text>
              </ListItem>
              <ListItem itemDivider>
                <Text>Taille - {pokemon.height/10} m </Text>
              </ListItem>
              <ListItem itemDivider>
                <Text style={{fontWeight: 'bold'}}>Capacités</Text>
              </ListItem>
              <List
                dataArray={pokemon.abilities}
                renderRow={(item) =>
                  <ListItem>
                    <Text>{item.ability.name}</Text>
                  </ListItem>
                }
                >
              </List>
          </View>
        </ScrollView>
      </Image>
    )
  }
}


const styles = {
  header: {
    fontSize: 30,
    color: 'red',
    textAlign: 'center'
  },
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  img: {
    height: 200,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  info: {
    flex: 1,
    backgroundColor: 'white',
    opacity: 0.8
  },
  backgroundImage: {
    flex: 1,
    resizeMode : 'cover',
    height: height,
    width: width
  }
}
