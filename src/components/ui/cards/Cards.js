import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// estilos css
import '../UI.css';
import Card from './Card';

const Cards = () => {

    // accediendo al state de autenticacion
    const { permissions } = useSelector( state => state.auth );

    const { usersTotal } = useSelector( state => state.users );
    const { clientsTotal } = useSelector( state => state.clients );
    const { devicesTotal } = useSelector( state => state.devices );    

    // clases para mostrar los iconos en el elemento i en Card.js
    const classUser = "fas fa-users";
    const classClient = "fas fa-restroom icon";
    const classDevice = "fas fa-tablet-alt icon";

    return (
        <div className='card__container'>
            { permissions === 'administrador' ?
                <>
                    <Card 
                        classe={ classUser }
                        text={`Usuarios: ${ usersTotal } `}
                    />

                    <Card 
                        classe={ classClient }
                        text={`Clientes: ${clientsTotal }`}
                    />

                    <Card 
                        classe={ classDevice }
                        text={`Dispositivos: ${ devicesTotal }`}
                    />
                </>
                : null
            }

            { permissions === 'recepcionista' ?
                <>
                    <Card 
                        classe={ classClient }
                        text={`Clientes: ${clientsTotal }`}
                    />

                    <Card 
                        classe={ classDevice }
                        text={`Dispositivos: ${ devicesTotal }`}
                    />
                </>
            : null
            }

            { permissions === 'tecnico' ?
                <>
                    <Card 
                        classe={ classDevice }
                        text={`Dispositivos: ${ devicesTotal }`}
                    />
                </>
            : null
            }

        </div>
    );
}
 
export default Cards;