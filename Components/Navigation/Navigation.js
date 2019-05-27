import React from 'react';
import {createBottomTabNavigator, createAppContainer, createStackNavigator} from 'react-navigation';

import Home from '../Screen/Home';
import Lien1 from '../Screen/Lien1';
import Lien2 from '../Screen/Lien2';
import Lien3 from '../Screen/Lien3';
import Lien4 from '../Screen/Lien4';
import Lien5 from '../Screen/Lien5';
import Optionsheader from '../Screen/Optionsheader';

var BottomNavigator = createBottomTabNavigator(
 {
  Home: Home,
  PageA: Lien1,
 },

);




var StackNavigator = createStackNavigator({

  Home: {
    screen: Home,
    navigationOptions: () => ({
      headerStyle: {
     backgroundColor: '#ecf0f1',
       },
       headerTintColor: '#fff',
       headerTitleStyle: {
         fontWeight: 'bold',
       },
    })

  },
  Lien1:{
    screen: Lien1,
    navigationOptions: () => ({
      headerStyle: {
      backgroundColor: '#ecf0f1',
       },
       headerTintColor: '#fff',
       headerTitleStyle: {
         fontWeight: 'bold'

        },
      })
    },

  Lien2:{
    screen: Lien2,
    navigationOptions: () => ({
      header: null
    })
  },
  Lien3:  {
    screen: Lien3,
    navigationOptions: () => ({
      header: null
    })
  },
  Lien4:{
    screen: Lien4,
    navigationOptions: () => ({
      header: null
    })
  },
  Lien5:{
    screen: Lien5,
    navigationOptions: () => ({
      header: null
    })
  },

    screen: Optionsheader,
    navigationOptions: () => ({
      headerStyle: {
      backgroundColor: '#ecf0f1',
       },
       headerTintColor: '#fff',
       headerTitleStyle: {
         fontWeight: 'bold'}
    })
  }
});



 export default Navigation = createAppContainer(StackNavigator,BottomNavigator);
