import React from 'react';

// estilos css
import '../UI.css';
import Card from './Card';

const Cards = () => {

    const user = 'administrador';
    // clases para mostrar los iconos en el elemento i en Card.js
    const classUser = "fas fa-users";
    const classClient = "fas fa-restroom icon";
    const classDevice = "fas fa-tablet-alt icon";


    return (
        <div className='card__container'>
            { user === 'administrador' ?
                <>
                    <Card 
                        classe={ classUser }
                        text="Usuarios: 5"
                    />

                    <Card 
                        classe={ classClient }
                        text="Clientes: 50"
                    />

                    <Card 
                        classe={ classDevice }
                        text="Dispositivos: 250"
                    />
                </>
                : null
            }

            { user === 'recepcionista' ?
                <>
                    <Card 
                        classe={ classClient }
                        text="Clientes: 50"
                    />

                    <Card 
                        classe={ classDevice }
                        text="Dispositivos: 250"
                    />
                </>
            : null
            }

            { user === 'tecnico' ?
                <>

                    <Card 
                        classe={ classDevice }
                        text="Dispositivos: 250"
                    />
                </>
            : null
            }

        </div>
    );
}
 
export default Cards;