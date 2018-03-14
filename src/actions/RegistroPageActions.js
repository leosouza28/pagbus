import {Alert} from 'react-native'
const con = require('../actions/RequisicaoActions');
const Util = require('../Util/Util')

export const limpar = (props) =>{
    props.modificaReducerRegistro('primeiro_nome', '')
    props.modificaReducerRegistro('ultimo_nome', '')
    props.modificaReducerRegistro('cpf', '')
    props.modificaReducerRegistro('email', '')
    props.modificaReducerRegistro('senha', '')
    props.modificaReducerRegistro('confsenha', '')
    props.modificaReducerRegistro('logradouro', '')
    props.modificaReducerRegistro('cidade', '')
    props.modificaReducerRegistro('estado', '')
    props.modificaReducerRegistro('telefone', '')
    return{
        type: ''
    }
}

export const registrar = (props)=> {
    let rota = '/usuario/novo';
    let dados = {
        pnome: props.primeiro_nome,
        unome: props.ultimo_nome,
        cpf: props.cpf,
        email: props.email,
        senha: props.senha,
        csenha: props.confsenha,
        cep: props.cep,
        logradouro: props.logradouro,
        cidade: props.cidade,
        estado: props.estado,
        telefone: props.telefone
    }
    con.post(rota, dados)
    .then(data=>{
        if(data.erro){
            Util.alertaSimples('Erro!', data.erro);
            props.modificaReducerRegistro('email', '');
        } else {
            console.log(data);
        }
    })
    .catch(err=>{
        console.log(err)
    })
    return{
        type:''
    }
}

export const validaSenha = (props) => {
    let info = {
        s1: props.senha,
        s2: props.confsenha
    }
    let t = {
        s1: info.s1.length,
        s2: info.s2.length
    }
    if(info.s1 == ''){
        Util.alertaSimples('Atenção!','Campo senha em branco!');
    } else if (info.s2 == '') {
        Util.alertaSimples('Atenção!','Campo de confirmação de senha em branco!');
    } else if (info.s1 != info.s2){
        props.modificaReducerRegistro('senha', '');
        props.modificaReducerRegistro('confsenha', '');
        Util.alertaSimples('Atenção', 'As senhas não coincidem!');
    } else if (t.s1 < 8 || t.s2 < 8){
        props.modificaReducerRegistro('senha', '');
        props.modificaReducerRegistro('confsenha', '');
        Util.alertaSimples('Atenção', 'A senha informada é muito curta, informe uma senha que contenha pelo menos 8 caracteres.');
    }
    return{
        type:''
    }
}

export const buscaCep = (props) =>{
    props.modificaReducerRegistro('loading', true)
    let cep = props.cep;
    Util.buscaCep(cep)
    .then(data=>{
            props.modificaReducerRegistro('logradouro', data.endereco+', ');
            props.modificaReducerRegistro('cidade', data.cidade);
            props.modificaReducerRegistro('estado', data.estado);
            props.modificaReducerRegistro('loading', false)
            Util.alertaSimples('Atenção!', 'Informe um número e/ou complemento após o endereço!')
    })
    .catch(err=>{
        props.modificaReducerRegistro('loading', false)
        Util.alertaSimples('Nenhum dado encontrado!')
    })
    return{type: ''}
}

export const modificaReducerRegistro = (index, value) => {
    return {
        type: 'modifica_reducer_detalhes',
        payload: {index, value}
    }
}