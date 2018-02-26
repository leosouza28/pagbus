import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TabNavigator, TabBarBottom, StackNavigator} from 'react-navigation';
import PrincipalPage from './components/PrincipalPage';
import LoginPage from './components/LoginPage';
import ContaPage from './components/ContaPage';
import CarteiraPage from './components/CarteiraPage';

const RootStack = TabNavigator(
    {
      Navegar: { screen: PrincipalPage },
      Carteira: { screen: CarteiraPage },
      Conta: { screen: ContaPage },
    },
    {
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Navegar') {
            iconName = 'directions-bus'
          } else if (routeName === 'Conta') {
            iconName = 'account-circle';
          } else if (routeName === 'Carteira'){
            iconName = 'account-balance-wallet'
          }
          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons
          return <MaterialIcons name={iconName} size={25} color={tintColor} />;
          // return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: '#000',
        inactiveTintColor: 'gray',
        labelStyle:{
          fontSize: 14
        }
      },
      tabBarComponent: TabBarBottom,
      tabBarPosition: 'bottom',
      animationEnabled: false,
      swipeEnabled: false,
    }
);
export default RootStack;