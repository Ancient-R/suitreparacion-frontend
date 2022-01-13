import { INICIAR_SESION_CORRECTO, INICIAR_SESION_ERROR } from "../types"

const initialState = {
    token: ( typeof window !== undefined) ? localStorage.getItem('suitreparacion-token') : null,
    user: null,
    permissions: null,
    logged: false,
}

export const authReducer = ( state = initialState, action ) => {
    switch( action.type ){

        case INICIAR_SESION_CORRECTO:
            localStorage.setItem('suitreparacion-token', action.payload.token );
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

        default:
            return state
    }
}