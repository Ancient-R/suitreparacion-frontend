import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import '../Tables.css';

const DevicesTable = () => {

    // accediendo al state de dispositivos
    const { devices } = useSelector( state => state.devices );

    // dispatch para los actions
    const dispatch = useDispatch();

    // estado para paginación
    const [page, setPage] = useState(1);

    return (
        <div className='table__container'>
            <div className='table__search'>
                <small>Filtrar por: </small>
                <select
                    className="table__search--input" 
                >
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
                                    >
                                        <i className="fas fa-user-edit"></i>
                                    </button>
                                    <button 
                                        className="action action-delete"
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
        </div>
    );
}
 
export default DevicesTable;