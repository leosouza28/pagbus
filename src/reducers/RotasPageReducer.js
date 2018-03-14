const INITIAL_STATE = {
    marcador: [],
    editando: false
}

export default (state = INITIAL_STATE, action)=>{
    if(action.type == 'modifica_reducer_rotas'){
        state[action.payload.index] = action.payload.value;
        return { ...state,  }
    }
    if(action.type == 'add_point'){
        return { ...state, marcador: [...state.marcador, {coords: action.payload}]  }
    }
    return state;
}
