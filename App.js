import React, {Component} from "react";
import {View, Text,  StyleSheet, Image, TouchableOpacity, FlatList} from 'react-native';
import Lista from './src/Lista';
import ListaStory from './src/ListaStory';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      feed:[
        {
          id: '1', 
          nome: 'Bruno Lima',
          usuario: 'bruno.lima',
          descricao: 'Chamaa', 
          imgperfil:'https://i.postimg.cc/Y0Vn2Bcy/brunolima.png', 
          imgpublicacao:'https://i.postimg.cc/ht5KTfLX/fogo-2.png', 
          likeada: false, 
          likers: 23
        },
        {
          id: '2', 
          nome: 'Matheus Gonçalves', 
          usuario: 'matheus.santos',
          descricao: 'Isso sim é ser raiz!!!!!', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
          imgpublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png', 
          likeada: false, 
          likers: 0
        },
        {
          id: '3', 
          nome: 'Jose Augusto', 
          usuario: 'jose.augusto',
          descricao: 'Bora trabalhar Haha', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png', 
          imgpublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',  
          likeada: false, 
          likers: 3
        },
        {
          id: '4', 
          nome: 'Gustavo Henrique',
          usuario: 'gustavo.santos', 
          descricao: 'Isso sim que é TI!', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
          imgpublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png', 
          likeada: false, 
          likers: 1
        },
        {
          id: '5', 
          nome: 'Guilherme Padua',
          usuario: 'guilherme.padua', 
          descricao: 'Boa tarde galera do insta...', 
          imgperfil: 'https://i.postimg.cc/Vv2KVGSQ/pexels-reead-886285.png', 
          imgpublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
          likeada: false, 
          likers: 32
        },
        {
          id: '6', 
          nome: 'Joao Santos',
          usuario: 'joao.santos',
          descricao: 'Olha ele aaaai', 
          imgperfil:'https://i.postimg.cc/jqDvpTRz/pexels-alex-green-6625953.png', 
          imgpublicacao:'https://i.postimg.cc/jdVYDZ5J/pngwing-com-2.png', 
          likeada: false, 
          likers: 57
        },
        {
          id: '7', 
          nome: 'Endrick Sousa',
          usuario: 'endrick',
          descricao: 'Rapaiiizzz', 
          imgperfil:'https://i.postimg.cc/y8xNPLmY/pexels-andrea-piacquadio-853151.png', 
          imgpublicacao:'https://i.postimg.cc/pLRNZrKW/pngwing-com-3.png', 
          likeada: false, 
          likers: 10
        },
        {
          id: '8', 
          nome: 'José Fernando',
          usuario: 'jose.fer',
          descricao: 'que que isso em', 
          imgperfil:'https://i.postimg.cc/gkJdFnng/pexels-pixabay-39866.png', 
          imgpublicacao:'https://i.postimg.cc/zf298k6v/pngwing-com.png', 
          likeada: false, 
          likers: 22
        },
        {
          id: '9', 
          nome: 'Ingrid Oliveira',
          usuario: 'igrind.oliver',
          descricao: 'Agora baba', 
          imgperfil:'https://i.postimg.cc/mk9YtbrJ/pexels-andrea-piacquadio-762080.png', 
          imgpublicacao:'https://i.postimg.cc/xCWhb10S/pngwing-com22.png', 
          likeada: false, 
          likers: 13
        },
        {
          id: '10', 
          nome: 'Arascaeta Santos',
          usuario: 'arrascaeta',
          descricao: 'jogo dms', 
          imgperfil:'https://i.postimg.cc/Vv2KVGSQ/pexels-reead-886285.png', 
          imgpublicacao:'https://i.postimg.cc/jdVYDZ5J/pngwing-com-2.png', 
          likeada: false, 
          likers: 1000
        },
      ]
    };

  }

  render(){
    return(
      <View style={styles.container}>

        <View style={styles.header}>

          <TouchableOpacity>
            <Image
              source={require('./src/img/logo.png')}
              style={styles.logo}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require('./src/img/send.png')}
              style={styles.send}
            />
          </TouchableOpacity>

        </View>

        <View style = {styles.areaStory}>
          
          <FlatList
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            data={this.state.feed}
            renderItem={ ({item}) => <ListaStory data={item} />}
            horizontal ={true}
          />

        </View>

        <FlatList
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          data={this.state.feed}
          renderItem={ ({item}) => <Lista data={item} />}
        />

      </View>
    );

  }

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    

  },
  header:{
    height: 45,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,

    borderBottomWidth: 0.2, //tamanho da borda do cabeçalho
    shadowColor: 'black', //cor da sombra
    elevation: 20, //Criar efeito de sombra
  },
  areaStory:{
    height: 90,
    alignItems: 'flex-start',
    padding: 5,
  },
  logo:{

  },
  send:{
    width: 23,
    height: 23
  }

});


export default App;