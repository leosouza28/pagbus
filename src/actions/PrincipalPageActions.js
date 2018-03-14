export const modificaReducerPrincipal = (index, value) => {
    return {
        type: 'modifica_reducer_principal',
        payload: {index, value}
    }
}

export const buscaCidade = (props) => {
    let API_KEY= 'AIzaSyBC_8uOi3_e_qzNrHDzBPD-K8mqpAd2tFc'
    let coords = {
        latitude: props.region.latitude,
        longitude: props.region.longitude
    }
    let URL = `https://maps.googleapis.com/maps/api/geocode/json?key=${API_KEY}&latlng=${coords.latitude},${coords.longitude}`
    console.log('URL:', URL);
    return{
        type: '----'
    }
}

export const buscarRota = (props) =>{
    let API_KEY_ROTA = 'AIzaSyCryKUqbOiTWoFq8oWQrosvlGAijPvndmI'
}
