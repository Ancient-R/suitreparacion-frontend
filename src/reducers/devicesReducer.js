import { OBTENER_DISPOSITIVOS_CORRECTO, OBTENER_DISPOSITIVOS_ERROR } from '../types';

const initialState = {
    devices: null,
    device: null,
    isOpenDeviceModal: false,

    // estado para paginación por parte del backend
    actualPage: null,
    prevPage: null,
    nextPage: null
}

export const devicesReducer = ( state = initialState, action ) => {
    switch( action.type ) {
        
        case OBTENER_DISPOSITIVOS_CORRECTO:
            return{
                devices: action.payload.docs,
                actualPage: action.payload.page,
                prevPage: action.payload.prevPage,
                nextPage: action.payload.nextPage
            }

        case OBTENER_DISPOSITIVOS_ERROR:
            return {
                ...state
            }
        
        default:
            return state
    }
}