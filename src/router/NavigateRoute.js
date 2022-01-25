import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';


// páginas de navegación
import Clients from '../pages/clients/Clients';
import Devices from '../pages/devices/Devices';
import Users from '../pages/users/Users';
import NoPermissionsPage from '../pages/notfound/NoPermissions';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersTotal } from '../actions/usersActions';
import { getClientsTotal } from '../actions/clientsAction';
import { getDevicesTotal } from '../actions/devicesActions';



export const NavigateRoute = () => {

    // accediendo al state de autenticacion
    const { permissions } = useSelector( state => state.auth );

    const dispatch = useDispatch();

    useEffect( () => {
        if( permissions === 'administrador') dispatch(getUsersTotal() );
        if( permissions ==='administrador' || permissions === 'recepcionista') dispatch( getClientsTotal() );
        dispatch( getDevicesTotal() );
    }, );
    return(
        <div className="container">

            <Routes>
                <Route path="/usuarios" element={<Users />}/>
                <Route path="/clientes" element={<Clients />}/>
                <Route path="/dispositivos" element={<Devices />}/>
                <Route path="/permisos-denegados" element={ < NoPermissionsPage />} />

            </Routes>
        </div>
    )
}