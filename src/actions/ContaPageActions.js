export const modificaStatusModal = (status) => {
    return{
        type: 'modifica_status_modal',
        payload: status

    }
}
export const modificaModal = (modal) => {
    return{
        type: 'modifica_modal',
        payload: modal

    }
}