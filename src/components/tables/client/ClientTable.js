import React from 'react';
import ActionsTable from '../ActionsTable';

import '../Tables.css';

const ClientTable = () => {
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

                    <tr className="table__row">
                        <td className="row__body">Maria Gomez Diaz</td>
                        <td className="row__body">Calle 18 de marzo #21 avenida de las flores</td>
                        <td className="row__body">
                            <div className='actions'>
                                <ActionsTable />
                            </div>
                        </td>
                        {/* <td className="row__body">
                            <table className='table'>
                                <tbody>
                                    <tr>
                                        <td className='row__body  row__body--internal'>Mackbook</td>
                                        <td className='row__body row__body--internal'>En revision</td>
                                    </tr>

                                    <tr>
                                        <td className='row__body row__body--internal'>Laptop</td>
                                        <td className='row__body row__body--internal'>Reparado</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td> */}
                    </tr>

                    <tr className="table__row">
                        <td className="row__body">Maria Gomez Diaz</td>
                        <td className="row__body">Calle 18 de marzo #21 avenida de las flores</td>
                        <td className="row__body">
                            <div className='actions'>
                                <ActionsTable />
                            </div>
                        </td>
                        {/* <td className="row__body">
                        <table className='table'>

                                <tbody>

                                    <tr>
                                        <td className='row__body'>Laptop</td>
                                        <td className='row__body'>Reparado</td>
                                    </tr>

                                    <tr>
                                        <td className='row__body'>Estereo</td>
                                        <td className='row__body'>No reparado</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td> */}
                    </tr>

                    <tr className="table__row">
                        <td className="row__body">Maria Gomez Diaz</td>
                        <td className="row__body">Calle 18 de marzo #21 avenida de las flores</td>
                        <td className="row__body">
                            <div className='actions'>
                                <ActionsTable />
                            </div>
                        </td>
                        {/* <td className="row__body">
                            <table className='table'>

                                <tbody>
                                    <tr>
                                        <td className='row__body'>Mackbook</td>
                                        <td className='row__body'>En revision</td>
                                    </tr>

                                    <tr>
                                        <td className='row__body'>Laptop</td>
                                        <td className='row__body'>Reparado</td>
                                    </tr>

                                </tbody>
                            </table>
                        </td> */}
                    </tr>

                    <tr className="table__row">
                        <td className="row__body">Maria Gomez Diaz</td>
                        <td className="row__body">Calle 18 de marzo #21 avenida de las flores</td>
                        <td className="row__body">
                            <div className='actions'>
                                <ActionsTable />
                            </div>
                        </td>
                        {/* <td className="row__body">
                            <table className='table'>

                                <tbody>
                                    <tr>
                                        <td className='row__body'>Mackbook</td>
                                        <td className='row__body'>En revision</td>
                                    </tr>

                                    <tr>
                                        <td className='row__body'>Laptop</td>
                                        <td className='row__body'>Reparado</td>
                                    </tr>

                                </tbody>
                            </table>
                        </td> */}
                    </tr>

                </tbody>
            </table>
        </div>
    );
}
 
export default ClientTable;