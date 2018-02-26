const INITIAL_STATE = {
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0
}

export default (state = INITIAL_STATE, action)=>{
    if(action.type == 'modifica_latitude'){
        return { ...state, latitude: action.payload}
    }
    if(action.type == 'modifica_longitude'){
        return { ...state, longitude: action.payload }
    }
    if(action.type == 'modifica_lat_delta'){
        return { ...state, latitudeDelta: action.payload}
    }
    if(action.type == 'modifica_lon_delta'){
        return { ...state, longitudeDelta: action.payload}
    }
    return state;
}