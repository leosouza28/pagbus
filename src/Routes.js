import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PrincipalPage from './components/PrincipalPage';
import ContaPage from './components/ContaPage';
import CartaoPage from './components/CartaoPage';
import { Router, Stack, Scene } from 'react-native-router-flux';

const Routes = () => (
  <Router>
    <Stack key="root">
        <Scene key="principal" component={PrincipalPage} title="Principal" hideNavBar={true}/>
        <Scene key="conta" component={ContaPage} title="Conta" hideNavBar={true}/>
        <Scene key="cartao" component={CartaoPage} title="Cartao" hideNavBar={true}/>
      </Stack>
  </Router>
)


export default Routes;