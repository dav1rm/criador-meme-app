import React, {Component} from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {n: 0, botao: 'Iniciar'};
    this.timer = null;

    this.iniciar = this.iniciar.bind(this);
    this.limpar = this.limpar.bind(this);
  }
  iniciar() {
    let s = this.state;
    if (this.timer != null) {
      // Parar o timer
      clearInterval(this.timer);
      this.timer = null;
      s.botao = 'Retomar';
    } else {
      // Começar o timer
      this.timer = setInterval(() => {
        s.n += 0.1;
        this.setState(s);
      }, 100);
      s.botao = 'Parar';
    }
    this.setState(s);
  }
  limpar() {
    if (this.timer != null) {
      // Parar o timer
      clearInterval(this.timer);
      this.timer = null;
    }
    let s = this.state;
    s.botao = 'Iniciar';
    s.n = 0;
    this.setState(s);
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={ require('./images/relogio.png')} />
        <Text style={styles.tempo}>{this.state.n.toFixed(1)}</Text>
        <View style={styles.botaoArea}>
          <TouchableOpacity style={styles.botao} onPress={this.iniciar}>
            <Text style={styles.botaoText}>{this.state.botao}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao}  onPress={this.limpar}>
            <Text style={styles.botaoText}>Limpar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c1f30',
  },
  tempo: {
    color: '#baa07a',
    fontSize: 80,
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: -150
  },
  botaoArea: {
    flexDirection: 'row',
    height: 40,
    marginTop: 80,
  },
  botao: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#886532',
    height: 40,
    borderRadius: 5,
    margin: 10
  },
  botaoText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#FFFFFF'
  }
});
