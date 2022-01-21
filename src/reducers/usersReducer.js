import { ABRIR_MODAL, ACTUALIZAR_USUARIO_CORRECTO, ACTUALIZAR_USUARIO_ERROR, AGREGAR_USUARIO_CORRECTO, AGREGAR_USUARIO_ERROR, CERRAR_MODAL, ELIMINAR_USUARIO_CORRECTO, ELIMINAR_USUARIO_ERROR, LIMPIAR_ESTADO_USUARIOS, OBTENER_USUARIOS_CORRECTO, OBTENER_USUARIOS_ERROR, USUARIO_SELECCIONADO } from '../types';

const initialState = {
    users: null,
    user: null,
    isOpenUserModal: false,
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
                users: state.users
            }

        case AGREGAR_USUARIO_ERROR:
        case ACTUALIZAR_USUARIO_ERROR:
        case ELIMINAR_USUARIO_ERROR:
            return {
                ...state
            }
        
        case USUARIO_SELECCIONADO:
            return{
                ...state,
                user: action.payload
            }

        case ABRIR_MODAL:
            return {
                ...state,
                isOpenUserModal: true
            }

        case CERRAR_MODAL:
            return {
                ...state,
                isOpenUserModal: false,
                user: null
            }

        case ACTUALIZAR_USUARIO_CORRECTO:
            console.log( action.payload );
            return {
                ...state,
                users: state.users.map( user => user._id === action.payload._id ? user = action.payload : user )
            }
        
        
        case ELIMINAR_USUARIO_CORRECTO:
            return {
                ...state,
                users: state.users.filter( user => user._id !== state.user._id ),
                user: null,
            }

        case LIMPIAR_ESTADO_USUARIOS:
            return {
                users: null,
                user: null,
                isOpenUserModal: false,
    
                actualPage: null,
                totalPages: null,
                prevPage: null,
                nextPage: null
            }

        default:
            return state
    }
}