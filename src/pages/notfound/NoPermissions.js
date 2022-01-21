import React from 'react';

// estilos css
import '../Pages.css';

const NoPermissionsPage = () => {
    return (
        <div className='content__page--permissions'>
            <h1 className='text-center'>Esta página sufrio de ansiemdamd</h1>
            <img 
                src='assets/images/notfound.png' 
                alt='no encontrado imagen' 
                className='permissions__image element-center'
            />

            <h2 className='text-center'>¡No tienes permisos para acceder a esta página!</h2>
        </div>
    );
}
 
export default NoPermissionsPage;