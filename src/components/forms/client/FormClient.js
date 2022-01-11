import React from 'react';

import '../Form.css';

const FormClient = ({ isEdit }) => {

    return (
        <form className='form form__user'>
            <div className='form__fields--left'>
                <div className='form__field'>
                    <label
                        className='form__label'
                    >Nombre: </label>
                    <div className='form__container--input'>
                        <i className="fas fa-user-circle form__icon form__icon--info bg-purple "></i>
                        <input 
                            type="text"
                            className='form__input form__input--info'
                            placeholder="Ej. Leonardo Luna Mora"
                        />
                    </div>
                </div>

                <div className='form__field'>
                    <label
                        className='form__label'
                    >Dirección: </label>
                    <div className='form__container--input'>
                        <i className="fas fa-directions form__icon form__icon--info bg-purple "></i>
                        <input 
                            type="text"
                            className='form__input form__input--info'
                            placeholder='Ej. Calle de las flores #18'
                        />
                    </div>
                </div>

                <div className='form__field'>
                    <label
                        className='form__label'
                    >Teléfono: </label>
                    <div className='form__container--input'>
                        <i className="fas fa-phone form__icon form__icon--info bg-purple "></i>
                        <input 
                            type="text"
                            className='form__input form__input--info'
                            placeholder="10 digitos"
                        />
                    </div>
                </div>
            </div>

            <div className='form__fields--rigth'>
            
                <div className='form__field'>
                    <label
                        className='form__label'
                    >Correo: </label>
                    <div className='form__container--input'>
                        <i className="fas fa-at form__icon form__icon--info bg-purple "></i>
                        <input 
                            type="email"
                            className='form__input form__input--info'
                            placeholder='Ej. micorreo@correo.com'
                        />
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
                        value="Agregar cliente"
                    />
                </div>
            }
        </form>
    );
}
 
export default FormClient;