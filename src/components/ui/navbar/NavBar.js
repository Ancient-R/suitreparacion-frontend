import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// estilos css
import '../UI.css';

// actions
import { logoutUser } from '../../../actions/authActions';
import { logoutCleanDevices } from '../../../actions/devicesActions';
import { logoutCleanUsers } from '../../../actions/usersActions';
import { logoutCleanClients } from '../../../actions/clientsAction';


const NavBar = () => {

    // dispatch para actions
    const dispatch = useDispatch();

    // accediendo al state de auth
    const { permissions } = useSelector( state => state.auth );

    // función para cerrar sesión
    const handleLogout = () => {
        dispatch( logoutUser() );
        dispatch( logoutCleanUsers() );
        dispatch( logoutCleanClients() );
        dispatch( logoutCleanDevices() );
    }

    return (
        <div className='navbar__container'>
            
            <img 
                src='assets/icons/logo_transparent.png'
                alt="suit reparacion logo" 
                className='logo'
            />

            <ul className='menu'>
                <NavLink 
                    to={ permissions !== 'administrador' ? '/permisos-denegados' : '/usuarios'}
                    className={ ({isActive}) => `${isActive ? 'active' :  ''}` }
                >
                    <li className='menu__item'>
                        <i className="fas fa-users menu__item--icon"></i>
                        <p>Usuarios</p>
                    </li>
                </NavLink>

                <NavLink 
                    to={ permissions === 'administrador' || permissions === 'recepcionista' ? '/clientes' : '/permisos-denegados'}
                    className={ ({isActive}) => `${isActive ? 'active' : ''}` }
                >
                    <li className='menu__item'>
                        <i className="fas fa-restroom menu__item--icon"></i>
                        <p>Clientes</p>
                    </li>
                </NavLink>


                <NavLink 
                    to="/dispositivos"
                    className={ ({isActive}) => `${isActive ? 'active' : ''}` }
                >
                    <li className='menu__item'>
                        <i className="fas fa-tablet-alt menu__item--icon"></i>
                        <p>Dispositivos</p>
                    </li>
                </NavLink>

                <li 
                    className='menu__item'
                    onClick={ handleLogout }
                >
                    <i className="fas fa-sign-out-alt menu__item--icon"></i>
                    <p>Cerrar Sesión</p>
                </li>
            </ul>
        </div>
    );
}
 
export default NavBar;