import React, {Component} from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

class Botao extends Component {
  constructor(props){
    super(props);
    this.state = {};
    this.styles = StyleSheet.create({
      botao: {
        width: 250,
        height: 50,
        borderWidth: 2,
        borderRadius: 3,
        borderColor: props.color,
        marginTop: 10,
        backgroundColor: 'transparent',
        padding: 10,
      },
      nomeBotao: {
        color: props.color,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16
      }
    });
    // this.escrever = this.escrever.bind(this);
  }
  render() {
    return (
      <TouchableOpacity style={this.styles.botao} onPress={this.props.onPress}>
        <Text style={this.styles.nomeBotao}>{this.props.texto}</Text>
      </TouchableOpacity>
    );
  }
}

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {texto: ''};
    this.frases = [
      "Por outro lado, a consolidação das estruturas exige a precisão e a definição do sistema de formação de quadros que corresponde às necessidades.",
      "O avanço tecnológico, assim como o entendimento das metas propostas, promovem alavancagem dos índices pretendidos.",
      "As experiências acumuladas demonstram que a valorização de fatores subjetivos aponta para a melhoria das direções preferenciais no sentido do progresso.",
      "Gostaria de enfatizar que a percepção das dificuldades assume importantes posições no estabelecimento do processo de comunicação como um todo.",
      "As experiências acumuladas demonstram que o desenvolvimento contínuo de distintas formas de atuação não pode mais se dissociar do levantamento das variáveis envolvidas.",
      "O que temos que ter sempre em mente é que o aumento do diálogo entre os diferentes setores produtivos promove a alavancagem do fluxo de informações.",
      "Todavia, a valorização de fatores subjetivos oferece uma interessante oportunidade para verificação das formas de ação.",
      "Nunca é demais lembrar o peso e o significado destes problemas, uma vez que a estrutura atual da organização exige a precisão e a definição das condições financeiras e administrativas exigidas.",
      "É claro que a constante divulgação das informações aponta para a melhoria do retorno esperado a longo prazo.",
      "Gostaria de enfatizar que o acompanhamento das preferências de consumo acarreta um processo de reformulação e modernização das direções preferenciais no sentido do progresso.",
      "A prática cotidiana prova que a competitividade nas transações comerciais facilita a criação do orçamento setorial.",
      "O empenho em analisar o início da atividade geral de formação de atitudes auxilia a preparação e a composição dos níveis de motivação departamental.",
      "Neste sentido, a expansão dos mercados mundiais pode nos levar a considerar a reestruturação do sistema de formação de quadros que corresponde às necessidades.",
      "No entanto, não podemos esquecer que a contínua expansão de nossa atividade é uma das consequências do sistema de formação de quadros que corresponde às necessidades.",
      "A prática cotidiana prova que a percepção das dificuldades prepara-nos para enfrentar situações atípicas decorrentes do remanejamento dos quadros funcionais.",
      "Evidentemente, a determinação clara de objetivos garante a contribuição de um grupo importante na determinação dos paradigmas corporativos.",
      "Nunca é demais lembrar o peso e o significado destes problemas, uma vez que o comprometimento entre as equipes agrega valor ao estabelecimento do orçamento setorial."
    ];
    this.quebrarBiscoito = this.quebrarBiscoito.bind(this);
  }
  quebrarBiscoito() {
    let s = this.state;
    let r = Math.floor(Math.random() * this.frases.length);
    s.texto = this.frases[r];
    this.setState(s);
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={ require('./images/cookie.png')} />
        <Text style={styles.texto}>"{this.state.texto}"</Text>
        <Botao color='#bc1a3a' texto='Quebrar Biscoito' onPress={this.quebrarBiscoito}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#D5D0CD',
  },
  texto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#bc1a3a',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  }
});
