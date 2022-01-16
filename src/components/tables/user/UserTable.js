import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../../actions/usersActions';
import ActionsTable from '../ActionsTable';

import '../Tables.css';

const UserTable = () => {

    // función dispatch para los actions
    const dispatch = useDispatch();

    // accediendo al state
    const { logged, permissions } = useSelector(state => state.auth);
    const { users } = useSelector(state => state.users);

    const [page, setPage] = useState(1);

    useEffect( () => {
        if( logged && permissions === 'administrador') dispatch( getUsers( page ) );

        // eslint-disable-next-line
    }, [ logged, permissions, page ]);
    
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
                                    <ActionsTable />
                                </td>
                            </tr>
                        )
                        : null
                    }

                </tbody>
            </table>
        </div>
    );
}
 
export default UserTable;