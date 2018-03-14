const INITIAL_STATE = {
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0070,
    longitudeDelta: 0.0012,
    userLatitude: 0,
    userLongitude: 0
}

export default (state = INITIAL_STATE, action)=>{
    if(action.type == 'modifica_reducer_principal'){
        state[action.payload.index] = action.payload.value;
        return { ...state,  }
    }
    return state;
}