import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// estilos css
import '../Tables.css';

// componentes
import DeviceModal from '../../ui/modals/devices/DeviceModal';
import DeviceTablePagination from './DeviceTablePagination';

// actions
import { activeDevice, deleteDevice, getDevices, openModalDevice } from '../../../actions/devicesActions';

// helpers
import { alertDelete } from '../../../helpers/Alert';

const DevicesTable = () => {

    // accediendo al state de autenticación
    const { logged, permissions } = useSelector( state => state.auth );

    // accediendo al state para saber si se está editando la información de un cliente, esto es con el fin de que se obtengan los dispositivos de ese cliente
    const { client } = useSelector( state => state.clients );

    // accediendo al state de dispositivos
    const { devices } = useSelector( state => state.devices );

    // dispatch para los actions
    const dispatch = useDispatch();

    // estado para paginación
        // eslint-disable-next-line
    const [page, setPage] = useState(1);

    // estado para formulario de búsqueda
    const [ search, setSearch ] = useState('');

    // función para manejar el estado del formulario
    const handleInputChange = e => {
        setSearch( e.target.value );
    }

    // función para actualizar dispositivos
    const handleUpdateDevice = ( device ) => {
        dispatch( activeDevice( device ));
        dispatch( openModalDevice() );
    }

    // función para eliminar dispositivos
    const handleDeleteDevice = ( device ) => {
        dispatch( activeDevice( device ) );
        alertDelete( device._id, dispatch, deleteDevice );
    }

    useEffect( () => {

        // verifica que exista una busqueda y un cliente, esto es útil para cuando un "administrador o recepcionista" quieran agregar un nuevo dispositivo a un cliente
        if( client && search === '' || client && search !== '' ) dispatch( getDevices( page, search, client._id ));

        // verifica que exista una busqueda, pero no un cliente, esto es útil para cuando un "tecnico" necesite actualizar un dispositivo, debido a que ellos no pueden agregar, solo actualizar información
        if( !client && search === '' || !client && search !=='' ) dispatch( getDevices(page, search, null ));


        if( logged && !client && search === '' ) dispatch( getDevices( page, search, null ) );

        

        // eslint-disable-next-line
    }, [ logged, permissions, page, search ]);

    return (
        <div className='table__container'>
            { client ? 
                <h1 className='text-center'>Dispositivos del cliente</h1>
                :null
            }
            <div className='table__search'>
                <small>Filtrar por: </small>
                <select
                    className="table__search--input" 
                    name='search'
                    value={ search }
                    onChange={ handleInputChange }
                >
                    <option value="">No filtrar</option>
                    <option value="nuevo ingreso">Nuevo ingreso</option>
                    <option value="en revision">En revisión</option>
                    <option value="reparado">Reparado</option>
                    <option value="no reparado">No reparado</option>
                    <option value="entregado">Entregado</option>
                </select>
            </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th className='table__head--row'>Tipo de Dispositivo</th>
                        <th className='table__head--row'>Fecha de ingreso</th>
                        <th className='table__head--row'>Estado</th>
                        <th className='table__head--row'>Acciones</th>
                    </tr>
                </thead>


                <tbody>
                    {/* Mostrando los dispositivos de la DB */}
                    { devices ?
                        devices.map( device => 
                            <tr 
                                className="table__row"
                                key={ device._id }
                            >
                                <td className="row__body">{ device.name }</td>
                                <td className="row__body">{ device.date }</td>
                                <td className="row__body">{ device.status }</td>
                                <td className="row__body actions">
                                    <button 
                                        className="action action-update"
                                        onClick={ () => handleUpdateDevice( device ) }
                                    >
                                        <i className="fas fa-user-edit"></i>
                                    </button>
                                    {/* Debido a que en el backend un usuario con permisos de tecnico no puede borrar dispositivos, este botón se muestra dependiendo de los permisos de cada usuario */}
                                    { permissions === 'administrador' || permissions === 'recepcionista' ?
                                        <button 
                                            className="action action-delete"
                                            onClick= { () => handleDeleteDevice( device ) }
                                        >
                                            <i className="fas fa-user-times"></i>
                                        </button>

                                        : null

                                    }
                                </td>
                            </tr>
                            )
                        : null
                    }

                </tbody>
            </table>

            <DeviceTablePagination
                setPage={ setPage }
            />

            {/* Modal para editar dispositivos */}
            <DeviceModal />
        </div>
    );
}
 
export default DevicesTable;