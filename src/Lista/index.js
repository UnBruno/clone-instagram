import React, {Component} from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'




class Lista extends Component{

  constructor(props){
    super(props);
    this.state = {
      feed: this.props.data
    };

    this.mostraLikes = this.mostraLikes.bind(this);
    this.like = this.like.bind(this);
    this.carregaLike = this.carregaLike.bind(this);
  }

  mostraLikes(likers){

    let feed = this.state.feed;

    if(feed.likers <= 0){
      return;
    }
    
    return(
      <Text style = {styles.likers}>
        {feed.likers} {feed.likers > 1 ? "curtidas" : "curtida"}
      </Text>
    );
  
  }

  like(){

    let feed = this.state.feed;

    if(feed.likeada === true){
        this.setState({
          feed:{
            ...feed,//para alterar apenas os argumentos que eu passar e manter os que não forem alterados
            likeada: false,
            likers: feed.likers - 1
          }
        })
    }else{
      this.setState({
        feed:{
          ...feed, //para alterar apenas os argumentos que eu passar e manter os que não forem alterados
          likeada: true,
          likers: feed.likers + 1
        }
      })
    }
  
  }

  carregaLike(likeada){

    if(likeada === true){
      return(require('../img/likeada.png'));
    }else{
      return(require('../img/like.png'));
    }
  
  }
  

  render(){
    return(
      <View style={styles.areaFeed}>

        <View style={styles.viewPerfil}>

          <Image
            source={{uri: this.state.feed.imgperfil}}
            style={styles.fotoPerfil}
          />
          
          <Text style={styles.nomeUsuario}>
            {this.state.feed.nome}
          </Text>

        </View> 

        <Image
          resizeMode="cover"
          style={styles.fotoPublicacao}
          source={{uri: this.state.feed.imgpublicacao}}
        />

        <View style={styles.areaIcones}>

          <TouchableOpacity onPress={this.like}>

            <Image
              source = {this.carregaLike(this.state.feed.likeada)}
              style = {styles.like}
            />

          </TouchableOpacity>

          <TouchableOpacity style={styles.send}>

            <Image
              source = {require('../img/send.png')}
              style = {styles.like}
            />

          </TouchableOpacity>

        </View>

        {this.mostraLikes(this.state.feed.likers)}

        <View style={styles.viewDescricao}>

          <Text style={styles.nomeDescricao}>
            {this.state.feed.usuario}
          </Text>

          <Text style={styles.descricao}>
            {this.state.feed.descricao}
          </Text>

        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  areaFeed:{
    flex: 1,
    paddingVertical: 5
  },
  areaIcones:{
    flexDirection: 'row',
    padding: 5
  },
  viewPerfil:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  viewDescricao:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  nomeUsuario:{
    fontSize: 22,
    textAlign: 'left',
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 5
  },
  fotoPerfil:{
    height: 50,
    width: 50,
    borderRadius: 25
  },
  fotoPublicacao:{
    flex: 1,
    height:400,
    alignItems: 'center'
  },
  like:{
    width: 25,
    height: 25
  },
  send:{
    paddingLeft: 10
  },
  nomeDescricao:{
    paddingLeft: 5,
    fontSize:15,
    color: 'black',
    fontWeight: 'bold'
  },
  descricao:{
    paddingLeft: 10,
    fontSize: 15,
    color: 'black'
  },
  likers:{
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 5,

  }


})
export default Lista;