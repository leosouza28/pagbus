import React, {Component} from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    ScrollView, 
    TextInput, 
    KeyboardAvoidingView, 
    Button,
    Alert } from 'react-native';
import {connect} from 'react-redux';
import { TextInputMask } from 'react-native-masked-text';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {BtnVoltar} from './BtnVoltar';
import {Loading} from './Loading';
import {
    validaSenha,
    buscaCep,
    modificaReducerRegistro, 
    registrar, 
} from '../actions/RegistroPageActions';

const actionCreators = {
    modificaReducerRegistro,
    buscaCep,
    validaSenha,
    registrar
}

const mapStateToProps = state => ({
    primeiro_nome: state.RegistroPageReducer.primeiro_nome,
    ultimo_nome: state.RegistroPageReducer.ultimo_nome,
    cpf: state.RegistroPageReducer.cpf,
    email: state.RegistroPageReducer.email,
    senha: state.RegistroPageReducer.senha,
    confsenha: state.RegistroPageReducer.confsenha,
    cep: state.RegistroPageReducer.cep,
    logradouro: state.RegistroPageReducer.logradouro,
    cidade: state.RegistroPageReducer.cidade,
    estado: state.RegistroPageReducer.estado,
    telefone: state.RegistroPageReducer.telefone,
    loading: state.RegistroPageReducer.loading
})

export class RegistroPage extends Component{    
    
    render(){
        return(
    <View style={{flex:1}}>
        <View style={style.viewTopo}>
            <View style={{justifyContent: 'center', paddingLeft: 15,paddingRight:15, paddingTop: 2.5}}>
                <BtnVoltar/>
            </View>
            <View style={{justifyContent: 'center'}}>
                <Text style={style.textLabel1}>Registrar</Text>
            </View>
        </View>
        <KeyboardAvoidingView behavior={'padding'} style={style.viewCorpo}>
            <ScrollView style={{flex:1, paddingTop: 5}}>
                <View style={{borderWidth:1, padding: 2.5, marginBottom: 2.5, borderRadius: 5/2}}>
                    <View>
                        <Text style={style.campoLabel}>Primeiro nome:</Text>
                    </View>
                    <View>
                    <TextInput
                    ref={'pNomeInput'}
                    style={style.textLabel2}
                    placeholder='Ex: João'
                    value={this.props.primeiro_nome}
                    onSubmitEditing={()=>this.refs.uNomeInput.focus()}
                    onChangeText={text=>this.props.modificaReducerRegistro('primeiro_nome', text)}
                    returnKeyType={'next'}
                    />
                    </View>
                </View>
                <View style={{borderWidth:1, padding: 2.5, marginBottom: 2.5, borderRadius: 5/2}}>
                    <View>
                        <Text style={style.campoLabel}>Ultimo nome:</Text>
                    </View>
                    <View>
                    <TextInput
                    ref={'uNomeInput'}
                    style={style.textLabel2}
                    placeholder='Ex: de Jesus'
                    value={this.props.ultimo_nome}
                    onSubmitEditing={()=>{this.refs['cpfInput'].getElement().focus()}}
                    onChangeText={text=>this.props.modificaReducerRegistro('ultimo_nome', text)}
                    returnKeyType={'next'}
                    />
                    </View>
                </View>
                <View style={{borderWidth:1, padding: 2.5, marginBottom: 2.5, borderRadius: 5/2}}>
                    <View>
                        <Text style={style.campoLabel}>CPF:</Text>
                    </View>
                    <View>
                    <TextInputMask    
                    ref={'cpfInput'}                        
                    style={style.textLabel2}
                    onSubmitEditing={()=>this.refs.emailInput.focus()}
                    placeholder='000.000.000-00'
                    value={this.props.cpf}
                    onChangeText={text=>this.props.modificaReducerRegistro('cpf', text)}
                    type={'cpf'}
                    returnKeyType={'next'}
                    />
                    </View>
                </View>
                <View style={{borderWidth:1, padding: 2.5, marginBottom: 2.5, borderRadius: 5/2}}>
                    <View>
                        <Text style={style.campoLabel}>E-mail:</Text>
                    </View>
                    <View>
                    <TextInput
                    ref={'emailInput'}
                    style={style.textLabel2}
                    onSubmitEditing={()=>{
                        this.refs.senhaInput.focus()
                    }}
                    placeholder='exemplo@email.com'
                    value={this.props.email}
                    onChangeText={text=>this.props.modificaReducerRegistro('email', text)}
                    keyboardType={'email-address'}
                    returnKeyType={'next'}
                    />
                    </View>
                </View>
                <View style={{borderWidth:1, padding: 2.5, marginBottom: 2.5, borderRadius: 5/2}}>
                    <View>
                        <Text style={style.campoLabel}>Senha:</Text>
                    </View>
                    <View>
                    <TextInput
                    ref={'senhaInput'}
                    style={style.textLabel2}
                    onSubmitEditing={()=>{
                        this.refs.confSenhaInput.focus()
                    }}
                    placeholder='A senha deve conter no minimo oito digitos.'
                    value={this.props.senha}
                    secureTextEntry={true}
                    onChangeText={text=>this.props.modificaReducerRegistro('senha', text)}
                    keyboardType={'default'}
                    returnKeyType={'next'}
                    />
                    </View>
                </View>
                <View style={{borderWidth:1, padding: 2.5, marginBottom: 2.5, borderRadius: 5/2}}>
                    <View>
                        <Text style={style.campoLabel}>Confirme sua senha:</Text>
                    </View>
                    <View>
                    <TextInput
                    ref={'confSenhaInput'}
                    style={style.textLabel2}
                    onSubmitEditing={()=>{
                        this.refs['cepInput'].getElement().focus()
                        this.props.validaSenha(this.props);
                    }}
                    placeholder='A senha deve conter no minimo oito digitos.'
                    value={this.props.confsenha}
                    secureTextEntry={true}
                    onChangeText={text=>this.props.modificaReducerRegistro('confsenha', text)}
                    keyboardType={'default'}
                    returnKeyType={'next'}
                    />
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex:1,borderWidth:1, padding: 2.5, marginBottom: 2.5, borderRadius: 5/2}}>
                        <View>
                            <Text style={style.campoLabel}>CEP:</Text>
                        </View>
                        <View>
                        <TextInputMask
                        ref={'cepInput'}
                        style={style.textLabel2}
                        placeholder='00000-000'
                        value={this.props.cep}
                        onChangeText={text=>this.props.modificaReducerRegistro('cep', text)}
                        type={'zip-code'}
                        />
                        </View>
                    </View>
                    <View style={{flex:1, paddingLeft: 5,justifyContent: 'center'}}>
                        <Button
                        title='OK'
                        onPress={()=>{
                            this.props.buscaCep(this.props)
                            this.refs.LogradouroInput.focus()
                        }}
                        />
                    </View>
                </View>
                <View style={{borderWidth:1, padding: 2.5, marginBottom: 2.5, borderRadius: 5/2}}>
                    <View>
                        <Text style={style.campoLabel}>Logradouro:</Text>
                    </View>
                    <View>
                    <TextInput
                    ref={'LogradouroInput'}
                    style={style.textLabel2}
                    onSubmitEditing={()=>this.refs.cidadeInput.focus()}
                    returnKeyType={'next'}
                    placeholder='...'
                    value={this.props.logradouro}
                    onChangeText={text=>this.props.modificaReducerRegistro('logradouro', text)}
                    />
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1,borderWidth:1, padding: 2.5, marginBottom: 2.5, marginRight: 1, borderRadius: 5/2, flexDirection: 'row'}}>
                        <View style={{flex:1}}>
                            <View>
                                <Text style={style.campoLabel}>Cidade:</Text>
                            </View>
                            <View>
                            <TextInput
                            ref='cidadeInput'
                            style={style.textLabel2}
                            onSubmitEditing={()=>this.refs.estadoInput.focus()}
                            returnKeyType={'next'}
                            placeholder='...'
                            value={this.props.cidade}
                            onChangeText={text=>this.props.modificaReducerRegistro('cidade', text)}
                            />
                            </View>
                        </View>
                    </View>
                    <View style={{flex: 1,borderWidth:1, padding: 2.5, marginBottom: 2.5, marginLeft: 1, borderRadius: 5/2, flexDirection: 'row'}}>
                        <View style={{flex:1}}>
                            <View>
                                <Text style={style.campoLabel}>Estado:</Text>
                            </View>
                            <View>
                            <TextInput
                            ref='estadoInput'
                            style={style.textLabel2}
                            onSubmitEditing={()=>this.refs['telefoneInput'].getElement().focus()}
                            returnKeyType={'next'}
                            placeholder='...'
                            value={this.props.estado}
                            onChangeText={text=>this.props.modificaReducerRegistro('estado', text)}/>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{borderWidth:1, padding: 2.5, marginBottom: 2.5, borderRadius: 5/2}}>
                    <View>
                        <Text style={style.campoLabel}>Telefone:</Text>
                    </View>
                    <View>
                    <TextInputMask
                    ref='telefoneInput'
                    style={style.textLabel2}
                    onSubmitEditing={()=>this.refs.botaoEnviar.touchableHandlePress()}
                    placeholder='(00)00000-0000'
                    value={this.props.telefone}
                    onChangeText={text=>this.props.modificaReducerRegistro('telefone', text)}
                    type={'cel-phone'}
                    returnKeyType={'send'}
                    />
                    </View>
                </View>
                <View style={{height:60}}/>
            </ScrollView>
        </KeyboardAvoidingView>
        <View style={style.viewRodape}>
            <TouchableOpacity style={style.btnSair}
            ref='botaoEnviar'
            disabled={
            !this.props.primeiro_nome || !this.props.email ||
            !this.props.ultimo_nome || !this.props.senha ||
            !this.props.confsenha || !this.props.cep ||
            !this.props.telefone}
            onPress={()=>{this.props.registrar(this.props)}}>
                <Text style={style.textLabel1}>Enviar</Text>
            </TouchableOpacity>
        </View>
        {this.props.loading == true ? 
        <Loading/> : false}
    </View>
        )
    }
}

const style = StyleSheet.create({
    viewTopo:{
        flex: 1,
        paddingTop: 20,
        flexDirection: 'row',
        borderBottomWidth: 1,
        marginLeft: 10,
        marginRight: 10
    },
    viewCorpo:{
        flex: 8,
        marginLeft: 10, 
        marginRight: 10
    },
    viewRodape:{
        flex: 1
    },
    textLabel1:{
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
    },
    textLabel2:{
        fontSize: 16,
        color: '#000',
        fontFamily: 'Thonburi',
        // fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    campoLabel:{
        fontSize: 16,
        color: 'rgba(0,0,0,0.5)',
        fontFamily: 'Thonburi',
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
})
export default connect (mapStateToProps, actionCreators)(RegistroPage)