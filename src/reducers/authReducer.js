import { INICIAR_SESION_ERROR } from "../types"

const initialState = {
    user: null,
    permissions: null,
    logged: false,
}

export const authReducer = ( state = initialState, action ) => {
    switch( action.type ){

        case INICIAR_SESION_ERROR:
            return {
                ...state
            }

        default:
            return state
    }
}