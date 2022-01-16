import { } from '../types';

const initialState = {
    users: null,
    user: null,
    // estado para páginación por parte del backend
    actualPage: 1,
    totalPages: null,
    prevPage: null,
    nextPage: null
}

export const usersReducer = ( state = initialState, action ) => {
    switch( action.type ){
        
        default:
            return state
    }
}