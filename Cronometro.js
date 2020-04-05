import React, { Component } from 'react';
import { Text, View, Platform, TouchableOpacity, TouchableHighlight, StyleSheet, Dimensions } from 'react-native';
import { estilos } from './components/Estilos';

export default class Cronometro extends Component {

  constructor(props) {
    super(props)
    this.state = {
      tempo: null,
      numero: 0,
      textoIniciarParar: 'Iniciar',
    }

    this.botaoIniciarParar = this.botaoIniciarParar.bind(this);
    this.botaoZerar = this.botaoZerar.bind(this);
  }

    botaoIniciarParar() {

      if (this.state.tempo == null) {
        let estado = this.state;
        estado.textoIniciarParar = 'Parar'
        this.setState(estado);

        this.state.tempo = setInterval(() => {
        let novoEstado = this.state
        novoEstado.numero += 0.1;
        this.setState(novoEstado);
        }, 100);
        
        } else {
        clearInterval(this.state.tempo)
        let novoEstado = this.state
        novoEstado.textoIniciarParar = 'Iniciar'
        novoEstado.tempo = null
        this.setState(novoEstado)
      }
    }

    botaoZerar() {
      clearInterval(this.state.tempo)
      let novoEstado = this.state
      novoEstado.tempo = null
      novoEstado.numero = 0
      this.setState(novoEstado)
    }

 render() {
  return (
    <View style={estilos.corpo}>
      <View style={estilos.container}>
       <View style = {estilos.circulo1}>
          <View style = {estilos.circulo2}>
            <Text style={estilos.containerTexto}>{this.state.numero.toFixed(1)}</Text>
          </View>
        </View>
      </View>
        <View style = {estilos.botoesContainer}>
          <TouchableOpacity style = {estilos.botoes} onPress={this.botaoIniciarParar}>
          <Text style = {estilos.botaoTexto} >{this.state.textoIniciarParar}</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {estilos.botoes} onPress={this.botaoZerar}>
          <Text style = {estilos.botaoTexto} >Zerar</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
  }
}
