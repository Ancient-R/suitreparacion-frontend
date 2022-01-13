import React, { useState } from 'react';

import '../Form.css';

const FormUser = ({ isEdit }) => {

    // estado para mostrar contraseña
    const [showpassword, setShowpassword] = useState(false);

    return (
        <>
            <h1 className='text-center'>Agregar usuario</h1>
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

                <div className='form__fields--rigth'>
                    <div className='form__field'>
                        <label
                            className='form__label'
                        >Nombre de usuario: </label>
                        <div className='form__container--input'>
                            <i className="fas fa-id-badge form__icon form__icon--info bg-purple "></i>
                            <input 
                                type="text"
                                className='form__input form__input--info'
                                placeholder="10 digitos"
                            />
                        </div>
                    </div>

                    <div className='form__field'>
                        <label
                            className='form__label'
                        >{ isEdit ? 'Contraseña anterior': 'Contraseña:'} </label>
                        <div className='form__container--input'>
                            <i 
                                className={`fas fa-eye fadein form__icon form__icon--info bg-purple  ${ showpassword ? 'icon-hide' : 'icon-show'}`}
                                onClick={ () => setShowpassword(!showpassword ) }
                            ></i>
                            <i 
                                className={`fas fa-eye-slash fadein form__icon form__icon--info icon--hide bg-purple  ${showpassword ? 'icon-show' : 'icon-hide'}`}
                                onClick={ () => setShowpassword( !showpassword ) }
                            ></i>
                            <input 
                                type={`${showpassword ? 'text' : 'password'}`}
                                className='form__input form__input--info'
                                placeholder="Mínimo 8 caracteres"
                            />
                        </div>
                    </div>

                    { isEdit ? 
                        <div className='form__field'>
                        <label
                            className='form__label'
                        >Nueva contraseña: </label>
                        <div className='form__container--input'>
                            <i 
                                className={`fas fa-eye fadein form__icon form__icon--info bg-purple  ${ showpassword ? 'icon-hide' : 'icon-show'}`}
                                onClick={ () => setShowpassword(!showpassword ) }
                            ></i>
                            <i 
                                className={`fas fa-eye-slash fadein form__icon form__icon--info icon--hide bg-purple  ${showpassword ? 'icon-show' : 'icon-hide'}`}
                                onClick={ () => setShowpassword( !showpassword ) }
                            ></i>
                            <input 
                                type={`${showpassword ? 'text' : 'password'}`}
                                className='form__input form__input--info'
                                placeholder="Mínimo 8 caracteres"
                            />
                        </div>
                    </div>

                    : null
                    }

                    <div className='form__field'>
                        <label
                            className='form__label'
                        >Estado: </label>
                        <div className='form__container--input'>
                            <i className="fas fa-exclamation-triangle form__icon form__icon--info bg-purple "></i>
                            <select 
                                className='form__input form__input--info'
                            >
                                <option>Activo</option>
                                <option>Inactivo</option>
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
                            value="Agregar Usuario"
                        />
                    </div>
                }
            </form>
        </>
    );
}
 
export default FormUser;