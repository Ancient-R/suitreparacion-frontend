import { } from '../types';

const initialState = {
    clients: null,
    client: null,
    isOpenClientModal: false,

    // estado para paginación por parte del backend
    actualPage: null,
    prevPage: null,
    nextPage: null
}

export const clientsReducer = ( state = initialState, action ) => {
    switch( action.type ){

        default:
            return state
    }
}