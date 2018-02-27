import React, {Component} from 'react';
import { ScrollView, StyleSheet, View, Text, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';

import OpContaPage from './OpContaPage';
import LoginPage from './LoginPage';
import {modificaStatusModal} from '../actions/ContaPageActions';

const mapStateToProps = state => ({
    modalLogin: state.ContaPageReducer.modalLogin,
})

export class ContaPage extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            logado: false
        }
        console.log(props);
    }
    render(){
        if(this.state.logado == true){
            return(
                <View style={style.viewPrincipal}>
                    <Text>Logado</Text>
                </View>
            )
        } else {
            return(
                <View style={style.viewPrincipal}>
                    <View style= {{flex: 1}}>
                        <View style={style.viewLabel}>
                            <Text style={style.textLabel}>
                            Minha Conta</Text>
                        </View>
                        <ScrollView style={{paddingTop: 15}}>
                            <OpContaPage icone='input' funcao='Acesse ou registre-se' cidade='' modal='Login'/>
                            <OpContaPage icone='location-city' funcao='Trocar cidade' cidade='Belém' modal='TrocaCidade'/>
                            <OpContaPage icone='message' funcao='Atendimento ao cliente' cidade='' modal='Atendimento'/>
                            <OpContaPage icone='info' funcao='Sobre o App' cidade='' modal='Sobre'/>
                        </ScrollView>
                    </View>
                </View>
            )
        }
    }
}


const style = StyleSheet.create({
    viewPrincipal: {
        flex: 1,
        paddingTop: 20
    },
    viewLabel:{
        flexDirection: 'row',
        paddingLeft: 5,
        borderBottomWidth: 1.5,
        borderColor: 'grey',
        paddingBottom: 10,
    },
    textLabel:{
        fontSize: 26,
        color: '#000',
        fontFamily: 'Thonburi',
        fontWeight: 'bold'
    }
});
export default connect (mapStateToProps, {modificaStatusModal})(ContaPage)