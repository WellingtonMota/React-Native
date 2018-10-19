import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import CompExample1 from './src/components/example1';

class CompExample extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.propriedade1}</Text>
        <Text>{this.props.propriedade2}</Text>
        <Text>{this.props.teste}</Text>
      </View>
    );
  }
}

export default class App extends Component {
   constructor(props) {
    super(props);

    this.state = { texto: 'texto vazio' };
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  atualizaTexto() {
    this.setState({ texto: 'Outro texto' });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Bootstrap React Native!</Text>
        <Text style={styles.example}>Exemplo 1: Props e states</Text>
        <CompExample propriedade1='ABC' propriedade2='xyz' teste={this.state.texto} />
        <Button 
          title='Botão'
          onPress={() => { this.atualizaTexto(); }}
        />
        <CompExample1 />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  example: {
    fontSize: 20,
    margin: 10,
  }
});
