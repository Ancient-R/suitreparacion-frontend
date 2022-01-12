import { Routes, Route } from 'react-router-dom';


// páginas de navegación
import Clients from '../pages/clients/Clients';
import Devices from '../pages/devices/Devices';
import Users from '../pages/users/Users';



export const NavigateRoute = () => {
    return(
        <div className="container">

            <Routes>
                <Route path="/usuarios" element={<Users />}/>
                <Route path="/clientes" element={<Clients />}/>
                <Route path="/dispositivos" element={<Devices />}/>


            </Routes>
        </div>
    )
}