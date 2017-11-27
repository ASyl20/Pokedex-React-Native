import React from 'react';
import {View, Text} from 'react-native';
import {Header,Item,Icon,Input,Button} from 'native-base';
import PokeChargement from './PokeChargement';
import SearchBody from './SearchBody';
import axios from 'axios';

class Search extends React.Component{

  state = {
    pokeRecherche: "",
    onCall: true,
    data: {}
  }

  recherchePoke = () => {
    this.setState({onCall:true});
    // On cree cette variable parce qu'une fois rentré dans axios
    // la variable this n'est plus celle de la classe
    var self = this;
    // traitement avec api
    axios.get("http://pokeapi.co/api/v2/pokemon/"+ this.state.pokeRecherche.toLowerCase())
    .then(function(response){
      console.log(response.data);
      self.setState({data:response.data});
      self.setState({onCall: false});
    })
    .catch(function(error){
      console.log(error);
    })
  }

  renderBody = () => {
    if(this.state.onCall){
      return(
      <PokeChargement/>
      )
    }
    else{
      return(
        <SearchBody data={this.state.data}/>
      )
    }
  }

  render(){
    return(
      <View style={{flex:1}}>
        <Header
          searchBar
          rounded
          >
            <Item>
              <Icon name="ios-search" onPress={this.recherchePoke}/>
              <Input
                value={this.state.pokeRecherche}
                placeholder="Recherche de Pokemons"
                onChangeText={(pokeSearch)=>this.setState({pokeRecherche:pokeSearch})}
              />
            </Item>
        </Header>
        {this.renderBody()}
      </View>
    )
  }

}


export default Search;
