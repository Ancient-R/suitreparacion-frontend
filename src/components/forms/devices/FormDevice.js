import React, { useState } from 'react';

// estilos css
import '../Form.css';

// helpers
import { Alert } from '../../../helpers/Alert';
import { useDispatch, useSelector } from 'react-redux';

// actions
import { newDevice, updateDevice } from '../../../actions/devicesActions';

const FormDevice = ({ isEdit }) => {

    // accediendo al state de dispositivos para saber si un dispositivo esta activo
    const { device } = useSelector( state => state.devices );

    // accediendo al state de auth
    const{ permissions } = useSelector( state => state.auth );
    const userPermissions = ( permissions === 'administrador' || permissions === 'recepcionista') ? true : false;

    // accediendo al state de cliente para obtener su id, debido a que para agregar un dispositivo, se tiene que asociar a un cliente
    const{ client } = useSelector( state => state.clients );

    // variable que almacena true o false, dependiendo de la condición, ( si "isEdit es true" es que se quiere editar un dispositivo )
    const isEditandActive = ( isEdit && device ) ? true:  false;

    // estado del formulario
    const [formDevicesValues, setFormDevicesValues] = useState({
        name: isEditandActive ? device.name : '',
        brand: isEditandActive ? device.brand : '',
        model: isEditandActive ? device.model : '',
        comentary: isEditandActive ? device.comentary : '',
        status: isEditandActive ? device.status : 'nuevo ingreso',
        comentaryTec: isEditandActive ? device.comentaryTec : '',
        lastUpdate: isEditandActive ? device.lastUpdate : '',
        date: isEditandActive ? device.date : '',
    });

    const { name, brand, model, comentary, status, comentaryTec, lastUpdate, date } = formDevicesValues;

    // dispatch para los actions
    const dispatch = useDispatch();

    // función para controlar los valores de los inputs
    const handleInputChange = e => {
        setFormDevicesValues({
            ...formDevicesValues,
            [ e.target.name ] : e.target.value
        });
    }

    // función submit para el formulario
    const handleSubmit = e => {
        e.preventDefault();

        // validación del formulario
        if( name.trim().length < 3 ) return Alert('¡Error!', 'Ingresa un nombre valido', 'error');

        if( brand.trim().length === '' ) return Alert('¡Error!', 'Ingresa un fabricante valido', 'error');

        if( model.trim().length < 3 ) return Alert('¡Error!', 'Modelo invalido', 'error');

        if( e.target.dataset.submit ) dispatch( newDevice( formDevicesValues, client._id ));

        if( e.target.dataset.edit ) dispatch( updateDevice( formDevicesValues, device._id ));

    }

    // función para limpiar el formulario
    const cleanForm = () => {
        setFormDevicesValues({
            name: '',
            brand: '',
            model: '',
            comentary: '',
            status: 'nuevo ingreso',
            comentaryTec: '',
        });
    }

    return (
        <>
            { isEditandActive ? 
                <h1 className='text-center'>Actualizar información de dispositivo</h1>
                :
                <h1 className='text-center'>Agregar dispositivo</h1>
            }
            <form className='form form__user'>
                <div className='form__fields--left'>

                    {/* Si se está editando la información se tiene que mostrar este campo, en caso contrario, se oculta */}
                    { isEditandActive ? 
                        <div className='form__field'>
                            <label
                                className='form__label'
                            >Fecha de ingreso: </label>
                            <div className='form__container--input'>
                                <i className="far fa-calendar-alt form__icon form__icon--info"></i>
                                <input 
                                    type="text"
                                    className='form__input form__input--info'
                                    name='date'
                                    disabled={ true }
                                    value={ date }
                                    onChange={ handleInputChange }
                                />
                            </div>
                        </div>
                        : null
                    }

                    <div className='form__field'>
                        <label
                            className='form__label'
                        >Tipo de dispositivo: </label>
                        <div className='form__container--input'>
                            <i className="fas fa-tablet-alt form__icon form__icon--info"></i>
                            <input 
                                type="text"
                                className='form__input form__input--info'
                                placeholder="Ej. computadora, celular, estereo"
                                name='name'
                                value={ name }
                                onChange={ handleInputChange }
                            />
                        </div>
                    </div>

                    <div className='form__field'>
                        <label
                            className='form__label'
                        >Fabricante: </label>
                        <div className='form__container--input'>
                            <i className="fas fa-directions form__icon form__icon--info"></i>
                            <input 
                                type="text"
                                className='form__input form__input--info'
                                placeholder='Ej. Sony, HP'
                                name='brand'
                                value={ brand }
                                onChange={ handleInputChange }
                            />
                        </div>
                    </div>

                    <div className='form__field'>
                        <label
                            className='form__label'
                        >Modelo: </label>
                        <div className='form__container--input'>
                            <i className="fas fa-phone form__icon form__icon--info"></i>
                            <input 
                                type="text"
                                className='form__input form__input--info'
                                placeholder="Ej. A30, Redmi 9 plus"
                                name='model'
                                value={ model }
                                onChange={ handleInputChange }
                            />
                        </div>
                    </div>

                    <div className='form__field'>
                        <label
                            className='form__label'
                        >Estado: </label>
                        <div className='form__container--input'>
                            <i className="fas fa-exclamation-triangle form__icon form__icon--info"></i>
                            <select 
                                className='form__input form__input--info'
                                name='status'
                                value={ status }
                                onChange={ handleInputChange }
                            >
                                <option value="nuevo ingreso">Nuevo ingreso</option>
                                <option value="en revision">En revisión</option>
                                <option value="reparado">Reparado</option>
                                <option value="no reparado">No reparado</option>
                                <option value="entregado">Entregado</option>

                            </select>
                        </div>
                    </div>
                    
                </div>

                <div className='form__fields--rigth'>

                    <div className='form__field'>
                        <label
                            className='form__label'
                        >Daño reportado y observaciones: </label>
                        <div>
                            <textarea
                                className='form__input form__input-text'
                                rows="5"
                                cols="30"
                                placeholder='Si el equipo viene con detalles, es decir, cámara borrosa, le faltan botones, no carga, etc.'
                                name='comentary'
                                disabled={ userPermissions ? false : true }
                                value={ comentary }
                                onChange={ handleInputChange }
                            >
                            </textarea>
                        </div>
                    </div>

                    {/* Si se está editando la información se tiene que mostrar este campo, en caso contrario, se oculta */}

                    { isEditandActive ?
                    <>
                        <div className='form__field'>
                            <label
                                className='form__label'
                            >Comentarios del técnico: </label>
                            <div>
                                <textarea
                                    className='form__input form__input-text'
                                    rows="5"
                                    cols="30"
                                    placeholder='Si el equipo viene con detalles, es decir, cámara borrosa, le faltan botones, no carga, etc.'
                                    name='comentaryTec'
                                    value={ comentaryTec }
                                    onChange={ handleInputChange }
                                >
                                </textarea>
                            </div>
                        </div>

                        <div className='form__field'>
                            <label
                                className='form__label'
                            >Última actualización: </label>
                            <div className='form__container--input'>
                                <i className="fas fa-user-edit form__icon form__icon--info"></i>
                                <input 
                                    type="text"
                                    className='form__input form__input--info'
                                    disabled={ true }
                                    name='lastUpdate'
                                    value={ lastUpdate }
                                    onChange={ handleInputChange }
                                />
                            </div>
                        </div>
                    </>
                        : null
                    }

                </div>

                <div className='form__field--actions'>
                    { isEditandActive ? 
                        <div className='form__field'>
                            <input
                                type="submit"
                                className='form__submit form__submit--info hover'
                                value="Editar datos"
                                onClick={ e => handleSubmit(e) }
                                data-edit={ true }
                            />
                        </div>

                        :

                        <div className='form__field'>
                            <input
                                type="submit"
                                className='form__submit form__submit--info hover'
                                value="Agregar dispositivo"
                                onClick={ e => handleSubmit(e) }
                                data-submit={ true }
                            />
                        </div>
                    }

                        <input
                            type="button"
                            className='form__submit form__submit--info hover'
                            value="Limpiar formulario"
                            onClick={ cleanForm }
                        />

                </div>
            </form>
        </>
    );
}
 
export default FormDevice;