import { combineReducers } from 'redux';

// reducers
import { authReducer } from './authReducer';
import { alertReducer } from './alertReducer';
import { usersReducer } from './usersReducer';
import { clientsReducer } from './clientsReducer';
import { devicesReducer } from './devicesReducer';

export default combineReducers({
    alert: alertReducer,
    auth: authReducer,
    users: usersReducer,
    clients: clientsReducer,
    devices: devicesReducer
});