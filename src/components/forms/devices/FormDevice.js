import React, { useState } from 'react';

// estilos css
import '../Form.css';

// helpers
import { Alert } from '../../../helpers/Alert';

const FormDevice = ({ isEdit }) => {

    // estado del formulario
    const [formDevicesValues, setFormDevicesValues] = useState({
        name: '',
        brand: '',
        model: '',
        comentary: '',
        status: 'nuevo ingreso'
    });

    const { name, brand, model, comentary, status } = formDevicesValues;

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

        if( e.target.dataset.submit ) console.log('enviando datos');

        if( e.target.dataset.edit ) console.log('editando datos');

    }

    // función para limpiar el formulario
    const cleanForm = () => {
        setFormDevicesValues({
            name: '',
            brand: '',
            model: '',
            comentary: '',
            status: 'nuevo ingreso'
        });
    }

    return (
        <form className='form form__user'>
            <div className='form__fields--left'>
                <div className='form__field'>
                    <label
                        className='form__label'
                    >Tipo de dispositivo: </label>
                    <div className='form__container--input'>
                        <i className="fas fa-user-circle form__icon form__icon--info"></i>
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
            </div>

            <div className='form__fields--rigth'>
            
                <div className='form__field'>
                    <label
                        className='form__label'
                    >Comentarios: </label>
                    <div>
                        <textarea
                            className='form__input form__input-text'
                            rows="5"
                            cols="30"
                            placeholder='Si el equipo viene con detalles, es decir, cámara borrosa, le faltan botones, no carga, etc.'
                            name='comentary'
                            value={ comentary }
                            onChange={ handleInputChange }
                        >
                        </textarea>
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

            <div className='form__field--actions'>
                { isEdit ? 
                    <div className='form__field'>
                        <input
                            type="submit"
                            className='form__submit form__submit--info hover'
                            value="Editar datos"
                            data-edit={ true }
                        />
                    </div>

                    :

                    <div className='form__field'>
                        <input
                            type="submit"
                            className='form__submit form__submit--info hover'
                            value="Agregar dispositivo"
                            onClick={ handleSubmit }
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
    );
}
 
export default FormDevice;