import { Actions } from 'react-native-router-flux';

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

export const login = (props) =>{
    let rota = '/usuario/login';
    let dados = {
        email: props.email,
        senha: props.senha
    }
    con.post(rota, dados)
    .then(data=>{
        res = data;
        if(!res.token){
            Sessao.finalizar()
        } else {
            Sessao.iniciar(res.token,res.email);
        }
    })
    .catch(err => {
        console.log(err)
    })
    
    return{
        type: '-----'
    }
}

export const verificaLogin=()=>{
    Sessao.verificar()
    .then(data=>{
        console.log(data)
    })
    .catch(err=>{
        console.log(err)
    })
    return{
        type: ''
    }
}