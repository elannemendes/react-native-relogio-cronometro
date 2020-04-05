import { StyleSheet, Dimensions } from 'react-native';

export const estilos = StyleSheet.create({
  corpo: {
    flex: 1,
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerTexto: {
    textShadowColor: '#0AAFE6',
    textShadowOffset: {
      width: 0,
      height: 0
    },
    textShadowRadius: 5,
    fontSize: 50,
    color: '#daf6ff'
  },
  botoesContainer: {
    flexDirection: 'row',
    padding: 20,
  },
  botoes: {
    backgroundColor: '#00CED1',
    marginHorizontal: 15,
    height: 50,
    justifyContent: 'center',
    width: 90,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 50
  },
  botaoTexto: {
    color: '#434343',
    fontSize: 17,
    fontWeight: 'bold',
    fontFamily: 'Comic Sans MS, Comic Sans, cursive'
  },
  circulo1: {
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height),
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').width * 0.5,
    justifyContent: 'center',
    alignItems: 'center',    
    backgroundColor: 'white',
    marginTop: 80,
    padding: 100
  },
  circulo2: {
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height),
    width: Dimensions.get('window').width * 0.59,
    height: Dimensions.get('window').width * 0.59,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333333',
  },
    horario: {
    textShadowColor: '#0AAFE6',
    textShadowOffset: {
      width: 0,
      height: 0
    },
    textShadowRadius: 5,
    fontSize: 70,
    color: '#daf6ff'
    }
});