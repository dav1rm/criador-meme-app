import React, {Component} from 'react';
import {ImageBackground, StyleSheet, Text, View, Button} from 'react-native';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = { consumido: 0, status: 'Ruim', pct: 0 }
    this.addCopo = this.addCopo.bind(this);
    this.atualizar = this.atualizar.bind(this);
  }
  atualizar(){
    let s = this.state;
    s.pct = Math.floor(((s.consumido/2000)*100));
    if (s.pct >= 100) {
      s.status = 'Bom';
    } else {
      s.status = 'Ruim';
    }
    this.setState(s);
  }
  addCopo(){
    let s = this.state;
    s.consumido += 200;
    this.setState(s);
    this.atualizar();
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.bgImage} source={require('./images/waterbg.png')}>
          <View>
            <View style={styles.infoArea}>
              <View style={styles.area}>
                <Text style={styles.titulo}>Meta</Text>
                <Text style={styles.dado}>2000ml</Text>
              </View>
              <View style={styles.area}>
                <Text style={styles.titulo}>Consumido</Text>
                <Text style={styles.dado}>{this.state.consumido}ml</Text>
              </View>
              <View style={styles.area}>
                <Text style={styles.titulo}>Status</Text>
                <Text style={styles.dado}>{this.state.status}</Text>
              </View>
            </View>
            <View style={styles.porcentagemArea}>
              <Text style={styles.porcentagemText}>{this.state.pct}%</Text>
            </View>
            <View style={styles.btnArea}>
              <Button 
                style={styles.botao} 
                title='Beber 200ml'
                onPress={this.addCopo}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D5D0CD',
  },
  bgImage: {
    flex: 1,
    width: null
  },
  infoArea: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 70
  },
  area: {
    flex: 1,
    alignItems: 'center'
  },
  titulo: {
    color: '#45b2fc'
  },
  dado: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#2b4274'
  },
  porcentagemArea: {
    marginTop: 120,
    alignItems: 'center'
  },
  porcentagemText: {
    fontSize: 70,
    backgroundColor: 'transparent',
    color: '#ffffff'
  },
  btnArea: {
    marginTop: 30,
    alignItems: 'center'
  }
});
