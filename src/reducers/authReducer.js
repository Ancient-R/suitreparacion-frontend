import { INICIAR_SESION_CORRECTO, INICIAR_SESION_ERROR, USUARIO_AUTENTICADO } from "../types"

const initialState = {
    token: ( typeof window !== 'undefined') ? localStorage.getItem('suitreparacion-token') : '',
    user: null,
    permissions: null,
    logged: false,
}

export const authReducer = ( state = initialState, action ) => {
    switch( action.type ){

        case INICIAR_SESION_CORRECTO:
            localStorage.setItem('suitreparacion-token', action.payload.token );
            console.log( action.payload );
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.name,
                permissions: action.payload.permissions,
                logged: true,
            }

        case INICIAR_SESION_ERROR:
            return {
                ...state
            }

            case USUARIO_AUTENTICADO:
                return{
                    ...state,
                    user: action.payload.name,
                    permissions: action.payload.permissions,
                    logged: true,

                }

        default:
            return state
    }
}