import { combineReducers } from 'redux';

// reducers
import { authReducer } from './authReducer';
import { alertReducer } from './alertReducer';

export default combineReducers({
    alert: alertReducer,
    auth: authReducer
});