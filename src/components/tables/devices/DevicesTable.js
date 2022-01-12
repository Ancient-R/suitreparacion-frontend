import React from 'react';

import '../Tables.css';

const DevicesTable = () => {
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

                    <tr className="table__row">
                        <td className="row__body">Impresora</td>
                        <td className="row__body">10 de enero de 2022</td>
                        <td className="row__body">Nuevo ingreso</td>
                        <td className="row__body actions">
                            <button className="action action-update">
                                <i className="fas fa-user-edit"></i>
                            </button>
                            <button className="action action-delete">
                                <i className="fas fa-user-times"></i>
                            </button>
                        </td>
                    </tr>

                    <tr className="table__row">
                        <td className="row__body">Mini componente</td>
                        <td className="row__body">02 de enero de 2022</td>
                        <td className="row__body">En revisión</td>
                        <td className="row__body actions">
                            <button className="action action-update">
                                <i className="fas fa-user-edit"></i>
                            </button>
                            <button className="action action-delete">
                                <i className="fas fa-user-times"></i>
                            </button>
                        </td>
                    </tr>

                    <tr className="table__row">
                        <td className="row__body">Impresora</td>
                        <td className="row__body">10 de enero de 2022</td>
                        <td className="row__body">Nuevo ingreso</td>
                        <td className="row__body actions">
                            <button className="action action-update">
                                <i className="fas fa-user-edit"></i>
                            </button>
                            <button className="action action-delete">
                                <i className="fas fa-user-times"></i>
                            </button>
                        </td>
                    </tr>

                    <tr className="table__row">
                        <td className="row__body">Mini componente</td>
                        <td className="row__body">02 de enero de 2022</td>
                        <td className="row__body">En revisión</td>
                        <td className="row__body actions">
                            <button className="action action-update">
                                <i className="fas fa-user-edit"></i>
                            </button>
                            <button className="action action-delete">
                                <i className="fas fa-user-times"></i>
                            </button>
                        </td>
                    </tr>

                    <tr className="table__row">
                        <td className="row__body">Impresora</td>
                        <td className="row__body">10 de enero de 2022</td>
                        <td className="row__body">Nuevo ingreso</td>
                        <td className="row__body actions">
                            <button className="action action-update">
                                <i className="fas fa-user-edit"></i>
                            </button>
                            <button className="action action-delete">
                                <i className="fas fa-user-times"></i>
                            </button>
                        </td>
                    </tr>

                    <tr className="table__row">
                        <td className="row__body">Mini componente</td>
                        <td className="row__body">02 de enero de 2022</td>
                        <td className="row__body">En revisión</td>
                        <td className="row__body actions">
                            <button className="action action-update">
                                <i className="fas fa-user-edit"></i>
                            </button>
                            <button className="action action-delete">
                                <i className="fas fa-user-times"></i>
                            </button>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
}
 
export default DevicesTable;