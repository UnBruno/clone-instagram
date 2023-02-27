import React, {Component} from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


class ListaStory extends Component{

  constructor(props){
    super(props);
    this.state = {
      feed: this.props.data
    };


  }


  render(){
    return(

      <View styles = {styles.areaStory}>

        <LinearGradient
          colors={['#FFD700', '#F27121','#E94057','#8A2387']}
          start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
          style={styles.grediant}
        >
          <TouchableOpacity style={styles.imgContainer}>
            <Image
            
              source={{uri: this.state.feed.imgperfil}}
              style = {styles.imgStory}
            
            />
          </TouchableOpacity>   
        </LinearGradient>
        


        <Text style={styles.texto}>
          {this.state.feed.usuario}
        </Text>
 
      
      </View>

    );

  }

}


const styles = StyleSheet.create({
  areaStory:{
    flex: 1,
    
  },  
  imgStory:{
    height: 65,
    width: 65,
    borderRadius: 35,
    borderWidth: 3,
    //borderColor: '#F27121'

  },
  grediant: {
    height: 70,
    width: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  imgContainer: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    width: '99%',
    marginLeft: 5
  },
  texto:{
    fontSize:8,
    textAlign: 'center',
    color: 'black'
  }
})

export default ListaStory;