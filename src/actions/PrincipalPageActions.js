export const modificaLatitude = (latitude) => {
    console.log(latitude)
    return{
        type: 'modifica_latitude',
        payload: latitude

    }
}
export const modificaLongitude = (longitude) => {
    console.log(longitude)
    return{
        type: 'modifica_longitude',
        payload: longitude

    }
}
export const modificaLatDelta = (latDelta) => {
    return{
        type: 'modifica_lat_delta',
        payload: latDelta

    }
}
export const modificaLonDelta = (latDelta) => {
    return{
        type: 'modifica_lon_delta',
        payload: latDelta

    }
}

export const modificaUserLatitude = (latitude) =>{
    return{
        type: 'modifica_user_latitude',
        payload: latitude
    }
}

export const modificaUserLongitude = (longitude) =>{
    return{
        type: 'modifica_user_longitude',
        payload: longitude
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
