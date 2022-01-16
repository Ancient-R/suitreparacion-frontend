import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import '../UI.css';
import { logoutUser } from '../../../actions/authActions';


const NavBar = () => {

    const dispatch = useDispatch();

    // función para cerrar sesión
    const handleLogout = () => {

        dispatch( logoutUser() );
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
                    to="/usuarios"
                    className={ ({isActive}) => `${isActive ? 'active' : ''}` }
                >
                    <li className='menu__item'>
                        <i className="fas fa-users menu__item--icon"></i>
                        <p>Usuarios</p>
                    </li>
                </NavLink>

                <NavLink 
                    to="/clientes"
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