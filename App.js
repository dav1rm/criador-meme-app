import React, {Component} from 'react';
import {Image, StyleSheet, Text, View, TextInput} from 'react-native';

export default class App extends Component {
  constructor(){
    super();
    this.state = {texto1: '', texto2: ''};
    this.escrever = this.escrever.bind(this);
  }
  mudarVogais(texto) {
    // Deixa todo o testo minusculo
    let novoTexto = texto.toLowerCase();
    // Substitui as vogais por i
    novoTexto = novoTexto.replace(/(a|á|à|ã|â|e|ê|é|è|i|í|ì|î|o|ô|õ|ó|ò|u|ú|ù|ũ)/g, 'i');
    return novoTexto;
  }
  escrever(t) {
    // Trocas as vogais por i
    let texto2 = this.mudarVogais(t);
    // Salva a frase normal
    let texto1 = t;
    // Salva no state
    this.setState({texto1, texto2})
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.titulo}>Criador de Meme</Text>
        </View>
        <View style={styles.inputArea}>
          <TextInput style={styles.input} onChangeText={this.escrever} placeholder="Escreva algo..."></TextInput>
        </View>
        <View style={styles.body}>
          <Text style={[styles.texto, styles.texto1]}>{this.state.texto1.toUpperCase()}</Text>
          <Image style={styles.imagem} source={require('./images/meme.jpg')} />
          <Text style={[styles.texto, styles.texto2]}>{this.state.texto2.toUpperCase()}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#D5D0CD',
  },
  header: {
    height: 50,
    width: '100%',
    backgroundColor: '#1abc9c',
    padding: 10,
  },
  titulo: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imagem: {
    height: 350,
    width: 350,
    marginTop: -70,
    zIndex:0,
  },
  body: {
    height: 350,
    width: 350,
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    backgroundColor: '#EEEEEE',
    borderColor: '#999999',
    color: '#000000',
    height: 40,
    margin: 10,
    padding: 10,
  },
  inputArea: {
    alignSelf: 'stretch',
  },
  texto: {
    height: 70,
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  texto1: {
    zIndex:1
  },
  texto2: {
    marginTop: -70,
    zIndex:1
  },
});
