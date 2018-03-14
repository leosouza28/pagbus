import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PrincipalPage from './components/PrincipalPage';
import ContaPage from './components/ContaPage';
import CartaoPage from './components/CartaoPage';
import LoginPage from './components/LoginPage';
import RegistroPage from './components/RegistroPage';
import RotasPage from './components/RotasPage';
import { Router, Stack, Scene } from 'react-native-router-flux';

const Routes = () => (
  <Router>
    <Stack key="root">
        <Scene key="principal" component={PrincipalPage} title="Principal" hideNavBar={true} />
        <Scene key="conta" component={ContaPage} title="Conta" hideNavBar={true}/>
        <Scene key="cartao" component={CartaoPage} title="Cartao" hideNavBar={true}/>
        <Scene key="login" component={LoginPage} title="Login" hideNavBar={true}/>
        <Scene key="registro" component={RegistroPage} title="Registro" hideNavBar={true}/>
        <Scene key="rotas" component={RotasPage} title="Rotas" hideNavBar={true}/>
      </Stack>
  </Router>
)


export default Routes;