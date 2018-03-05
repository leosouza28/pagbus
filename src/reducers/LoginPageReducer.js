const INITIAL_STATE = {
    email: '',
    senha: ''
}

export default (state = INITIAL_STATE, action)=>{
    if(action.type == 'modifica_texto_email'){
        return { ...state, email: action.payload}
    }
    if(action.type == 'modifica_texto_senha'){
        return { ...state, senha: action.payload}
    }
    return state;
}