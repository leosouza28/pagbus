const INITIAL_STATE = {
    primeiro_nome: '',
    ultimo_nome: '',
    cpf: '',
    email: '',
    senha: '',
    confsenha: '',
    cep: '',
    logradouro: '',
    cidade: '',
    estado: '',
    telefone: '',
    loading: false
}

export default (state = INITIAL_STATE, action)=>{
    if(action.type == 'modifica_reducer_detalhes'){
        state[action.payload.index] = action.payload.value;
        return { ...state,  }
    }
    return state;
}
