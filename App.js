import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Relogio from './Relogio';
import Cronometro from './Cronometro';

const Tab = createBottomTabNavigator({
  Relogio: {
    screen: Relogio,
    navigationOptions: {
      tabBarLabel: 'Relógio',
    },
  },
  Cronometro: {
    screen: Cronometro,
    navigationOptions: {
      tabBarLabel: 'Cronômetro',
    },
  },
},
    {
      tabBarOptions: {
        labelStyle:{
          flex: 2,
          fontSize: 22,
          fontFamily: 'Comic Sans MS, Comic Sans, cursive', 
        },
        activeTintColor: '#00CED1',
        inactiveTintColor: 'white',
        style: {
          backgroundColor: '#434343',
          height: 90,
          marginRigth: 1,
        },
        //showLabel: false,
      },
      defaultNavigationOptions: (navigation)=> ({
        tabBarLabel: ({focused, horizontal, tintColor}) => {
          const {nomeRota} = navigation.state;
          let ComponenteIcon = Ionicons;
          let nomeIcon;

          if (nomeRota == 'Relogio'){
            nomeIcon = 'time-outline';
          } else if (nomeRota == 'Cronometro'){
            nomeIcon = 'stopwatch-outline';
          }

          return <ComponenteIcon name={nomeIcon} size={50} color={tintColor}/>; 
        }
      })
});

export default createAppContainer (Tab);
