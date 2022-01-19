import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// componentes
import ClientModal from '../../ui/modals/client/ClientModal';

// estilos css
import '../Tables.css';

// actions
import { activeClient, openModalClient } from '../../../actions/clientsAction';

const ClientTable = () => {

    // accediendo al state de clientes
    const { clients } = useSelector(state => state.clients);

    // dispatch para los actions
    const dispatch = useDispatch();

    // función para actualizar datos
    const handleUpdateClient = ( client ) => {
        dispatch( activeClient( client ) );
        dispatch( openModalClient() );

    }

    return (
        <div className='table__container'>
            <div className='table__search'>
                <i 
                    className="fas fa-search table__search--icon bg-purple"
                ></i>
                <input 
                    type="text" 
                    className="table__search--input" 
                    placeholder="Ej papi-02"
                />
            </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th className='table__head--row'>Nombre</th>
                        <th className='table__head--row'>Dirección</th>
                        <th className='table__head--row'>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                        {/* Mostrando los clientes de la DB */}
                    { clients ?
                        clients.map( client => 
                        <tr 
                            className="table__row"
                            key={ client._id }
                        >
                            <td className="row__body">{ client.name }</td>
                            <td className="row__body">{ client.address }</td>
                            <td className="row__body">
                                <div className='actions'>
                                <button 
                                        className="action action-update"
                                        onClick={ () => handleUpdateClient( client ) }
                                    >
                                        <i className="fas fa-user-edit"></i>
                                    </button>
                                    <button 
                                        className="action action-delete"
                                    >
                                        <i className="fas fa-user-times"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>

                        )

                        : null
                    }

                </tbody>
            </table>

            {/* Modal para editar información de usuario */}
            <ClientModal />
        </div>
    );
}
 
export default ClientTable;