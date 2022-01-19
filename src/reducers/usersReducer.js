import { ACTIVE_USER, AGREGAR_USUARIO_CORRECTO, AGREGAR_USUARIO_ERROR, ELIMINAR_USUARIO_CORRECTO, ELIMINAR_USUARIO_ERROR, OBTENER_USUARIOS_CORRECTO, OBTENER_USUARIOS_ERROR } from '../types';

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
            return {
                ...state,
                users: [ ...state.users, action.payload ]
            }

        case AGREGAR_USUARIO_ERROR:
        case ELIMINAR_USUARIO_ERROR:
            return {
                ...state
            }
        
        case ACTIVE_USER:
            return{
                ...state,
                user: action.payload
            }
        
        case ELIMINAR_USUARIO_CORRECTO:
            return {
                ...state,
                users: state.users.filter( user => user._id !== state.user ),
                user: null,
            }

        default:
            return state
    }
}