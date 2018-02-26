const INITIAL_STATE = {
    modalStatus: false,
    modal: ''
}

export default (state = INITIAL_STATE, action)=>{
    if(action.type == 'modifica_status_modal'){
        console.log(action.payload)
        return { ...state, modalStatus: action.payload}
    }
    if(action.type == 'modifica_modal'){
        console.log(action.payload)
        return { ...state, modal: action.payload }
    }
    return state;
}