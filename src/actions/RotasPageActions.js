export const modificaReducerRotas = (index, value) => {
    return {
        type: 'modifica_reducer_rotas',
        payload: {index, value}
    }
}

export const addPoint = (point) => {
    console.log(point);
    // {longitude: -122.03216884285212, latitude: 37.33479223462276}
    return {
        type: 'add_point',
        payload: point
    }
}