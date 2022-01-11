import React from 'react';

import '../UI.css';


const NavBar = () => {
    return (
        <div className='navbar__container'>
            
            <img 
                src='assets/icons/logo_transparent.png'
                alt="suit reparacion logo" 
                className='logo'
            />

            <ul className='menu'>
                <li className='menu__item'>
                    <i className="fas fa-users"></i>
                    <p>Usuarios</p>
                </li>

                <li className='menu__item'>
                    <i className="fas fa-restroom"></i>
                    <p>Clientes</p>
                </li>

                <li className='menu__item'>
                    <i className="fas fa-tablet-alt"></i>
                    <p>Dispositivos</p>
                </li>

                <li className='menu__item'>
                    <i className="fas fa-users"></i>
                    <p>Cerrar Sesión</p>
                </li>
            </ul>
        </div>
    );
}
 
export default NavBar;