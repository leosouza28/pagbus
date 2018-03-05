import React, {Component} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {modificaTextoEmail, modificaTextoSenha, login} from '../actions/LoginPageActions';
import {connect} from 'react-redux';

const actionCreators = {
    modificaTextoEmail,
    modificaTextoSenha,
    login
}

const mapStateToProps = state => ({
    email: state.LoginPageReducer.email,
    senha: state.LoginPageReducer.senha
})

export class LoginPage extends Component{

    constructor(props){
        super(props)
    }
    render(){
        return(
        <View
        style={{flex:1, paddingTop: 15}}>
            <View style={{flex: 1, borderBottomWidth: 1, marginLeft: 10, marginRight: 10, borderColor: '#000'}}>
                <View
                style={{alignItems: 'center'}}
                >
                </View>
            </View>
            <View style={{flex: 1, alignItems:'center'}}>
                <View style={style.viewInput}>
                    <View style={{alignItems:'center', justifyContent: 'center', paddingLeft: 5}}>
                        <MaterialIcons name='mail-outline' size={24} color="#000" />
                    </View>
                    <TextInput
                    style={style.input}
                    onChangeText={(texto)=>{this.props.modificaTextoEmail(texto)}}
                    autoCorrect={false}
                    keyboardType='email-address'
                    placeholder='E-mail'
                    />
                </View>
                <View style={style.viewInput}>
                    <View style={{alignItems:'center', justifyContent: 'center', paddingLeft: 5}}>
                        <MaterialIcons name='lock-outline' size={24} color="#000" />
                    </View>
                    <TextInput
                    style={style.input}
                    keyboardType='default'
                    onChangeText={(texto) => {this.props.modificaTextoSenha(texto)}}
                    secureTextEntry={true}
                    placeholder='Senha'
                    />
                </View>
                <View style={style.Botoes}>
                    <View style={{justifyContent: 'center'}}>
                        <TouchableOpacity >
                            <Text style={{fontSize: 14, color: '#000', fontWeight: '600'}}>Esqueci minha senha</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={{borderWidth: 1, padding: 10, borderColor: '#000'}}
                    onPress={()=>this.props.login(this.props)}>
                        <Text style={{fontSize: 14, color: '#000', fontWeight: '600'}}>ENTRAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={style.viewRodape}>
                <View style={{paddingTop: 40}}>
                <TouchableOpacity >
                    <Text style={{fontSize: 18, color: '#000', fontWeight: '600'}}>REGISTRAR</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
        )
    }
}
const style = StyleSheet.create({
    input:{
        height: 40,
        textAlign: 'center',
        flex: 1
    },
    viewInput:{
        width: 300, 
        marginTop: 15,
        borderColor: '#000',
        flexDirection: 'row',
        borderWidth: 1
    },
    viewRodape:{
        flex: 1, 
        borderTopWidth: 1,
        borderColor: '#000',
        justifyContent: 'center',
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10
    },
    Botoes:{
        width: 300, 
        marginTop: 15,
        borderColor: '#000',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})
export default connect (mapStateToProps, actionCreators)(LoginPage)