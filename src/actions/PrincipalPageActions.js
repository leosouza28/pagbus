export const modificaLatitude = (latitude) => {
    return{
        type: 'modifica_latitude',
        payload: latitude

    }
}
export const modificaLongitude = (longitude) => {
    return{
        type: 'modifica_longitude',
        payload: longitude

    }
}
export const modifica_lat_delta = (latDelta) => {
    return{
        type: 'modifica_lat_delta',
        payload: latDelta

    }
}
export const modifica_lon_delta = (latDelta) => {
    return{
        type: 'modifica_lon_delta',
        payload: latDelta

    }
}

export const modifica_regiao = (coord, valor) => {
    return{
        type: 'altera_regiao',
        payload: valor
    }
}