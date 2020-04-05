import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Moment from 'moment';
import { estilos } from './components/Estilos';

export default class Relogio extends Component {

  constructor(props) {
    super(props);
    this.state = {horario: this.horario()};
  }

    horario() {
    return Moment().format('H:mm:ss');
  }

  componentDidMount(){
    setInterval(() => {
      this.setState({
        horario: this.horario(),
      });
    }, 30);
  }

  render() {
    return (
      <View style={estilos.container}>
        <Text style={estilos.horario}>{this.state.horario}</Text>
      </View>
    );
  }

}
