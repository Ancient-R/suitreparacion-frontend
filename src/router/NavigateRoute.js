import React from 'react';
import { Routes, Route } from 'react-router-dom';


// páginas de navegación
import Clients from '../pages/clients/Clients';
import Devices from '../pages/devices/Devices';
import Users from '../pages/users/Users';
import NoPermissionsPage from '../pages/notfound/NoPermissions';



export const NavigateRoute = () => {
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