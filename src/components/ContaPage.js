import React, {Component} from 'react';
import { ScrollView, StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import OpContaPage from './OpContaPage';
import LoginPage from './LoginPage';
import { Actions } from 'react-native-router-flux';
import {BtnVoltar} from './BtnVoltar';
import { modificaStatusLogin } from '../actions/ContaPageActions';
import { verificaLogin, logoff } from '../actions/LoginPageActions';
import { InfoContaPage } from './InfoContaPage';

const actionCreators = {
    modificaStatusLogin,
    verificaLogin,
    logoff
}

const mapStateToProps = state => ({
    logado: state.ContaPageReducer.logado
})

export class ContaPage extends Component{

    componentWillMount(){
        verificaLogin(this.props)
    }

    render(){
         return(
            <View style={{flex:1}}>
                <View style={style.viewTopo}>
                    <View style={{justifyContent: 'center', paddingLeft: 15,paddingRight:15,paddingTop: 2.5}}>
                        <BtnVoltar/>
                    </View>
                    <View style={{justifyContent: 'center',flex :1}}>
                        <Text style={style.textLabel}>Conta</Text>
                    </View>
                </View>
                <View style={style.viewCorpo}>
                <ScrollView style={{paddingTop: 15}}>
                    {this.props.logado == true ?
                    <View>
                        <OpContaPage icone='account-box' funcao='Meus dados' link='detalhes'/>
                        <OpContaPage icone='directions' funcao='Adicionar rota' link='rotas'/>
                        <OpContaPage icone='directions-subway' funcao='Adicionar ponto de onibus' link='rotas'/>
                    </View>
                    :
                    <OpContaPage icone='input' funcao='Acesse ou registre-se' link='login'/>
                    }
                    <OpContaPage icone='message' funcao='Atendimento ao cliente' link='atendimento'/>
                    <OpContaPage icone='info' funcao='Sobre o PagBus' link='sobre'/>
                    </ScrollView>
                </View>

                <View style={style.viewRodape}>
                <Button
                title='Sair'
                onPress={()=>{this.props.logoff(this.props)}}/>
                </View>
            </View>
        )
    }
}


const style = StyleSheet.create({
    viewTopo:{
        flex: 1,
        borderBottomWidth: 1,
        paddingTop: 20,
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10
    },
    viewCorpo:{
        flex: 8
    },
    viewRodape:{
        flex: 1
    },
    textLabel:{
        fontSize: 26,
        color: '#000',
        fontFamily: 'Thonburi',
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    btnSair:{
        flex:1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#CCC',
        borderTopWidth:1,
        borderColor: '#FFF'
    }
});
export default connect (mapStateToProps, actionCreators)(ContaPage)