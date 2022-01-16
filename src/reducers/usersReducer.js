import { AGREGAR_USUARIO_CORRECTO, AGREGAR_USUARIO_ERROR, OBTENER_USUARIOS_CORRECTO, OBTENER_USUARIOS_ERROR } from '../types';

const initialState = {
    users: null,
    user: null,
    // estado para páginación por parte del backend
    actualPage: null,
    totalPages: null,
    prevPage: null,
    nextPage: null
}

export const usersReducer = ( state = initialState, action ) => {
    switch( action.type ){
        
        case OBTENER_USUARIOS_CORRECTO:
            return {
                users: action.payload.docs,
                actualPage: action.payload.page,
                totalPages: action.payload.totalPages,
                prevPage: action.payload.prevPage,
                nextPage: action.payload.nextPage
            }

        case OBTENER_USUARIOS_ERROR:
            return {
                ...state
            }

        case AGREGAR_USUARIO_CORRECTO:
        case AGREGAR_USUARIO_ERROR:
            return {
                ...state
            }
        
        default:
            return state
    }
}