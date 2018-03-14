const INITIAL_STATE = {
    logado: false
}

export default (state = INITIAL_STATE, action)=>{
    if(action.type == 'modifica_status_login'){
        return { ...state, logado: action.payload}
    }
    return state;
}