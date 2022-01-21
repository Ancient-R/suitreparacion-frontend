import { ABRIR_MODAL, ACTUALIZAR_CLIENTE_CORRECTO, ACTUALIZAR_CLIENTE_ERROR, AGREGAR_CLIENTE_CORRECTO, AGREGAR_CLIENTE_ERROR, CERRAR_MODAL, CLIENTE_SELECCIONADO, ELIMINAR_CLIENTE_CORRECTO, ELIMINAR_USUARIO_ERROR, LIMPIAR_ESTADO_CLIENTES, OBTENER_CLIENTES_CORRECTO, OBTENER_CLIENTES_ERROR } from '../types';

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

        case OBTENER_CLIENTES_CORRECTO:
            return {
                clients: action.payload.docs,
                actualPage: action.payload.page,
                prevPage: action.payload.prevPage,
                nextPage: action.payload.nextPage
            }

        case OBTENER_CLIENTES_ERROR:
        case AGREGAR_CLIENTE_CORRECTO:
        case AGREGAR_CLIENTE_ERROR:
        case ACTUALIZAR_CLIENTE_ERROR:
        case ELIMINAR_USUARIO_ERROR:
            return {
                ...state
            }

        case CLIENTE_SELECCIONADO:
            return{
                ...state,
                client: action.payload
            }

        case ABRIR_MODAL:
            return {
                ...state,
                isOpenClientModal: true
            }

        case CERRAR_MODAL:
            return {
                ...state,
                isOpenClientModal: false,
                client: null
            }

        case ACTUALIZAR_CLIENTE_CORRECTO:
            return {
                ...state,
                clients: state.clients.map( client => client._id === action.payload._id ? client = action.payload : client )
            }

        case ELIMINAR_CLIENTE_CORRECTO:
            return {
                ...state,
                clients: state.clients.filter( client => client._id !== state.client._id ),
                client: null
            }

        case LIMPIAR_ESTADO_CLIENTES:
            return {
                clients: null,
                client: null,
                isOpenClientModal: false,

                actualPage: null,
                prevPage: null,
                nextPage: null
            }
            
        default:
            return state
    }
}