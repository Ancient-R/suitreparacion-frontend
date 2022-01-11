import React from 'react';

import '../Form.css';

const FormDevice = ({ isEdit }) => {

    return (
        <form className='form form__user'>
            <div className='form__fields--left'>
                <div className='form__field'>
                    <label
                        className='form__label'
                    >Tipo de dispositivo: </label>
                    <div className='form__container--input'>
                        <i className="fas fa-user-circle form__icon form__icon--info bg-purple "></i>
                        <input 
                            type="text"
                            className='form__input form__input--info'
                            placeholder="Ej. computadora, celular, estereo"
                        />
                    </div>
                </div>

                <div className='form__field'>
                    <label
                        className='form__label'
                    >Fabricante: </label>
                    <div className='form__container--input'>
                        <i className="fas fa-directions form__icon form__icon--info bg-purple "></i>
                        <input 
                            type="text"
                            className='form__input form__input--info'
                            placeholder='Ej. Sony, HP'
                        />
                    </div>
                </div>

                <div className='form__field'>
                    <label
                        className='form__label'
                    >Modelo: </label>
                    <div className='form__container--input'>
                        <i className="fas fa-phone form__icon form__icon--info bg-purple "></i>
                        <input 
                            type="text"
                            className='form__input form__input--info'
                            placeholder="Ej. A30, Redmi 9 plus"
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
                        >
                        </textarea>
                    </div>
                </div>

                <div className='form__field'>
                    <label
                        className='form__label'
                    >Estado: </label>
                    <div className='form__container--input'>
                        <i className="fas fa-exclamation-triangle form__icon form__icon--info bg-purple "></i>
                        <select 
                            className='form__input form__input--info'
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

            { isEdit ? 
                <div className='form__field'>
                    <input
                        type="submit"
                        className='form__submit form__submit--info  bg-yellow  hover'
                        value="Editar datos"
                    />
                </div>

                :

                <div className='form__field'>
                    <input
                        type="submit"
                        className='form__submit form__submit--info bg-green hover'
                        value="Agregar dispositivo"
                    />
                </div>
            }
        </form>
    );
}
 
export default FormDevice;