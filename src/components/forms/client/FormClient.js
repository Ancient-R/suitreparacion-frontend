import React, { useState } from 'react';

import '../Form.css';

const FormClient = ({ isEdit }) => {

    // estado del formulario
    const [formClientValues, setFormClientValues] = useState({
        name: '',
        address: '',
        phone: '',
        email: '',
    })

    const { name, address, phone, email } = formClientValues;

    // función para controlar los valores de los inputs
    const handleInputChange = e => {
        setFormClientValues({
            ...formClientValues,
            [ e.target.name ] : e.target.value
        });
    }

    return (
        <>
        { isEdit ? 
            <h1 className='text-center'>Editar cliente</h1>
            :
            <h1 className='text-center'>Agregar cliente</h1>
        }
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
                                name='name'
                                value={ name }
                                onChange={ handleInputChange }
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
                                name='address'
                                value={ address }
                                onChange={ handleInputChange }
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
                                name='phone'
                                value={ phone }
                                onChange={ handleInputChange }
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
                                name='email'
                                value={ email }
                                onChange={ handleInputChange }
                            />
                        </div>
                    </div>
                </div>

                <div className='form__field--actions'>

                    { isEdit ? 
                        <input
                            type="submit"
                            className='form__submit form__submit--info hover'
                            value="Editar datos"
                        />

                        :
                        <input
                            type="submit"
                            className='form__submit form__submit--info hover'
                            value="Agregar cliente"
                        />
                    }
                    <input
                        type="button"
                        className='form__submit form__submit--info hover'
                        value="Limpiar formulario"
                    />
                </div>

            </form>
        </>
    );
}
 
export default FormClient;