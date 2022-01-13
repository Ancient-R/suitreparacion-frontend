import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from '../types';

const initialState = {
    message: null
}

export const alertReducer = ( state = initialState, action ) => {
    switch( action.type ) {
        
        case MOSTRAR_ALERTA: 
            return{
                ...state,
                message: action.payload
            }

        case OCULTAR_ALERTA:
            return {
                ...state,
                message: null
            }

        default:
            return state
    }
}