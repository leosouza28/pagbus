import { Actions } from 'react-native-router-flux';

const Util = require('../Util/Util');
const con = require('../actions/RequisicaoActions');
const Sessao = require('../actions/Storage');

export const modificaTextoEmail = (texto) => {
    return{
        type: 'modifica_texto_email',
        payload: texto
    }
}
export const modificaTextoSenha = (texto) => {
    return{
        type: 'modifica_texto_senha',
        payload: texto
    }
}
export const modificaStatusLoading = (status) => {
    return{
        type: 'modifica_status_loading',
        payload: status
    }
}

export const login = (props) =>{
    let rota = '/usuario/login';
    let dados = {
        email: props.email,
        senha: props.senha
    }
    if(dados.email == ''){
        Util.alertaSimples('Ops!','Campo e-mail em branco!');
    } else if (dados.senha == '') {
        Util.alertaSimples('Ops!','Campo senha em branco!');
    } else {
        props.modificaStatusLoading(true)
        con.post(rota, dados)
        .then(data=>{
            res = data;
            if(!res.token){
                Util.alertaSimples('Falha ao logar', 'Usuário ou senha inválidos!');
                props.modificaStatusLoading(false);
                Sessao.finalizar();
            } else {
                Sessao.iniciar(res.token, dados.email);
                props.modificaStatusLogin(true);
                props.modificaStatusLoading(false);
                Actions.pop();
            }
        })
        .catch(err => {
            Util.alertaSimples('Falha ao logar', 'Estamos passando por instabilidades!');
            props.modificaStatusLoading(false);
        })
    }
    return{
        type: '-----'
    }
}

export const logoff=(props)=>{
    Actions.pop();
    props.modificaStatusLogin(false);
    Sessao.finalizar();
    return{
        type: ''
    }
}

export const verificaLogin=(props)=>{
    Sessao.verificar()
    .then(data=>{
        res = JSON.parse(data)
        if(res.token){
            props.modificaStatusLogin(true);
        } else {
        }
    })
    .catch(err=>{
        
    })
    return{
        type: ''
    }
}