import React from 'react';
import {View,Image} from 'react-native';

class PokeChargement extends React.Component{
  render(){
    return(
      <View style={{flex:1, backgroundColor:'#FFFFFF'}}>
        <Image
          source={{uri: "https://s-media-cache-ak0.pinimg.com/originals/51/72/56/517256bf41fd027b5eec4a38c5110420.gif"}}
          style={styles.img}
        />
      </View>
    )
  }
}

const styles = {
  img: {
    height: 400,
    width: 400,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default PokeChargement;
