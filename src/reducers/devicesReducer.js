import { ABRIR_MODAL_DISPOSITIVO, ACTUALIZAR_DISPOSITIVO_CORRECTO, ACTUALIZAR_DISPOSITIVO_ERROR, AGREGAR_DISPOSITIVO_CORRECTO, AGREGAR_DISPOSITIVO_ERROR, CERRAR_MODAL_DISPOSITIVO, DISPOSITIVO_SELECCIONADO, ELIMINAR_DISPOSITIVO_CORRECTO, ELIMINAR_DISPOSITIVO_ERROR, LIMPIAR_ESTADO_DISPOSITIVOS, OBTENER_DISPOSITIVOS_CORRECTO, OBTENER_DISPOSITIVOS_ERROR, OBTENER_DISPOSITIVOS_TOTAL, OBTENER_ESTADO_DISPOSITIVOS_CORRECTO, OBTENER_ESTADO_DISPOSITIVOS_ERROR } from '../types';

const initialState = {
    devices: null,
    device: null,
    devicesStatus: null,
    devicesTotal: null,
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
                ...state,
                devices: action.payload.docs,
                actualPage: action.payload.page,
                prevPage: action.payload.prevPage,
                nextPage: action.payload.nextPage
            }
        
        case OBTENER_DISPOSITIVOS_TOTAL:
            return {
                ...state,
                devicesTotal: action.payload
            }

        case OBTENER_DISPOSITIVOS_ERROR:
        case AGREGAR_DISPOSITIVO_CORRECTO:
        case AGREGAR_DISPOSITIVO_ERROR:
        case ACTUALIZAR_DISPOSITIVO_ERROR:
        case ELIMINAR_DISPOSITIVO_ERROR:
        case OBTENER_ESTADO_DISPOSITIVOS_ERROR:
            return {
                ...state
            }
        
        case DISPOSITIVO_SELECCIONADO:
            return {
                ...state,
                device: action.payload
            }

        case ABRIR_MODAL_DISPOSITIVO:
            return {
                ...state,
                isOpenDeviceModal: true
            }
        
        case CERRAR_MODAL_DISPOSITIVO:
            return {
                ...state,
                isOpenDeviceModal: false,
                device: null
            }

        case ACTUALIZAR_DISPOSITIVO_CORRECTO:
            return {
                ...state,
                devices: state.devices.map( device => device._id === action.payload._id ? device = action.payload : device )
            }
        
        case ELIMINAR_DISPOSITIVO_CORRECTO:
            return {
                ...state,
                devices: state.devices.filter( device => device._id !== state.device._id ),
                device: null
            }

        case OBTENER_ESTADO_DISPOSITIVOS_CORRECTO:
            return {
                ...state,
                devicesStatus: action.payload
            }

        case LIMPIAR_ESTADO_DISPOSITIVOS:
            return {
                devices: null,
                device: null,
                devicesTotal: null,
                isOpenDeviceModal: false,

                actualPage: null,
                prevPage: null,
                nextPage: null
            }

        default:
            return state
    }
}