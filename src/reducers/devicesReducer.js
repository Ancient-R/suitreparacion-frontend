import { } from '../types';

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
        
        default:
            return state
    }
}