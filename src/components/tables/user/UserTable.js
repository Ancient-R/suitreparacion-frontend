import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// estilos css
import '../Tables.css';

// componentes
import UserModal from '../../ui/modals/user/UserModal';
import UserTablePagination from './pagination/UserTablePagination';

// userActions.js
import { activeUser, deleteUser, openModal } from '../../../actions/usersActions';

// helper
import { alertDelete } from '../../../helpers/Alert';

const UserTable = () => {

    // función dispatch para los actions
    const dispatch = useDispatch();

    const { users } = useSelector(state => state.users);

    // estado para paginación
        // eslint-disable-next-line
    const [page, setPage] = useState(1);


    // función para editar usuario
    const handleUpdate = ( user ) => {
        dispatch( activeUser( user ) );
        dispatch( openModal() );
    }

    // función para eliminar usuario
    const handleDelete = ( user ) => {
        dispatch( activeUser( user ) );
        alertDelete( user._id, dispatch, deleteUser );

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
                        <th className='table__head--row'>Permisos</th>
                        <th className='table__head--row'>Estado</th>
                        <th className='table__head--row'>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                {/*  Mostrando los usuarios de la DB*/}
                    { users ? 
                        users.map( user => 
                            <tr 
                                className="table__row"
                                key={ user._id }

                            >
                                <td className="row__body">{ user.name }</td>
                                <td className="row__body">{ user.permissions }</td>
                                <td className="row__body">{ user.status }</td>
                                <td className="row__body actions">
                                    <button 
                                        className="action action-update"
                                        onClick={ () => handleUpdate( user ) }
                                    >
                                        <i className="fas fa-user-edit"></i>
                                    </button>
                                    <button 
                                        className="action action-delete"
                                        onClick={ () => handleDelete( user ) }
                                    >
                                        <i className="fas fa-user-times"></i>
                                    </button>
                                </td>
                            </tr>
                        )
                        : null
                    }

                </tbody>
            </table>

            <UserTablePagination
                setPage= { setPage }
            />

            {/* Modal para editar información del usuario */}
            <UserModal />
        </div>
    );
}
 
export default UserTable;