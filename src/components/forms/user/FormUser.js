import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// css
import '../Form.css';

// actions
import { newUser } from '../../../actions/usersActions';

// helpers
import { Alert } from '../../../helpers/Alert';
import { validateEmail, validatePass, validatePhone } from '../../../helpers/validations';

const FormUser = ({ isEdit }) => {

    // estado para mostrar contraseña
    const [showpassword, setShowpassword] = useState(false);

    // estado del formulario
    const [formValues, setFormValues] = useState({
        name: '',
        address: '',
        phone: '',
        email: '',
        username: '',
        password: '',
        newPassword: '',
        permissions: 'administrador',
        status: 'activo'
    });
    const { name, address, phone, email, username, password, newPassword, permissions, status } = formValues;

    // dispatch para los actions
    const dispatch = useDispatch();

    // función para controlar los valores de los inputs
    const handleInputChange = e => {
        setFormValues({
            ...formValues,
            [ e.target.name ] : e.target.value
        });
    }

    // función submit para el formulario
    const handleSubmit = e => {
        e.preventDefault();

        // validar formulario
        if( name.trim().length < 5 ) return Alert('¡Error!', 'Ingresa un nombre valido', 'error');

        if( address.trim().length < 5 ) return Alert('¡Error!', 'Ingresa una dirección valida', 'error');

        if( phone.trim().length < 9 || !validatePhone( phone )) return Alert('¡Error!', 'Número de teléfono invalido', 'error');

        if( email.trim().length < 5 || !email.includes('@') || !validateEmail( email )) return Alert('¡Error!', 'Ingresa un correo electronico valido', 'error');

        if( username.trim().length < 5 ) return Alert('¡Error!', 'Nombre de usuario invalido', 'error');

        if( password.trim().length < 8 || !validatePass( password )) return Alert('¡Error!', 'Recuerda que la contraseña debe tener mínimo ocho caracteres, al menos una letra, una mayúscula, un número y un carácter especial', 'error');

        dispatch( newUser( formValues ) );
    }

    // función para limpiar el formulario
    const handleCleanForm = () => {
        setFormValues({
            name: '',
            address: '',
            phone: '',
            email: '',
            username: '',
            password: '',
            newPassword: '',
            permissions: 'administrador',
            status: 'activo'
        });
    }

    return (
        <>
            <h1 className='text-center'>Agregar usuario</h1>
            <form 
                className='form form__user'
                onSubmit={ handleSubmit }
            >
                <div className='form__fields--left'>
                    <div className='form__field'>
                        <label
                            className='form__label'
                        >Nombre: </label>
                        <div className='form__container--input'>
                            <i className="fas fa-user-circle form__icon form__icon--info"></i>
                            <input 
                                type="text"
                                className='form__input form__input--info'
                                placeholder="Ej. Leonardo Luna Mora"
                                name="name"
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
                            <i className="fas fa-directions form__icon form__icon--info"></i>
                            <input 
                                type="text"
                                className='form__input form__input--info'
                                placeholder='Ej. Calle de las flores #18'
                                name="address"
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
                            <i className="fas fa-phone form__icon form__icon--info"></i>
                            <input 
                                type="text"
                                className='form__input form__input--info'
                                placeholder="10 digitos"
                                name="phone"
                                value={ phone }
                                onChange={ handleInputChange }
                            />
                        </div>
                    </div>

                    <div className='form__field'>
                        <label
                            className='form__label'
                        >Correo: </label>
                        <div className='form__container--input'>
                            <i className="fas fa-at form__icon form__icon--info"></i>
                            <input 
                                type="email"
                                className='form__input form__input--info'
                                placeholder='Ej. micorreo@correo.com'
                                name="email"
                                value={ email }
                                onChange={ handleInputChange }
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
                            <i className="fas fa-id-badge form__icon form__icon--info"></i>
                            <input 
                                type="text"
                                className='form__input form__input--info'
                                placeholder="10 digitos"
                                name="username"
                                value={ username }
                                onChange={ handleInputChange }
                            />
                        </div>
                    </div>

                    <div className='form__field'>
                        <label
                            className='form__label'
                        >{ isEdit ? 'Contraseña anterior': 'Contraseña:'} </label>
                        <div className='form__container--input'>
                            <i 
                                className={`fas fa-eye fadein form__icon form__icon--info ${ showpassword ? 'icon-hide' : 'icon-show'}`}
                                onClick={ () => setShowpassword(!showpassword ) }
                            ></i>
                            <i 
                                className={`fas fa-eye-slash fadein form__icon form__icon--info icon--hide ${showpassword ? 'icon-show' : 'icon-hide'}`}
                                onClick={ () => setShowpassword( !showpassword ) }
                            ></i>
                            <input 
                                type={`${showpassword ? 'text' : 'password'}`}
                                className='form__input form__input--info'
                                placeholder="Mínimo 8 caracteres"
                                name="password"
                                value={ password }
                                onChange={ handleInputChange }
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
                                className={`fas fa-eye fadein form__icon form__icon--info ${ showpassword ? 'icon-hide' : 'icon-show'}`}
                                onClick={ () => setShowpassword(!showpassword ) }
                            ></i>
                            <i 
                                className={`fas fa-eye-slash fadein form__icon form__icon--info icon--hide ${showpassword ? 'icon-show' : 'icon-hide'}`}
                                onClick={ () => setShowpassword( !showpassword ) }
                            ></i>
                            <input 
                                type={`${showpassword ? 'text' : 'password'}`}
                                className='form__input form__input--info'
                                placeholder="Mínimo 8 caracteres"
                                name="newPassword"
                                value={ newPassword }
                                onChange={ handleInputChange }
                            />
                        </div>
                    </div>

                    : null
                    }

                    <div className='form__field'>
                        <label
                            className='form__label'
                        >Permisos: </label>
                        <div className='form__container--input'>
                            <i className="fas fa-id-card form__icon form__icon--info"></i>
                            <select 
                                className='form__input form__input--info'
                                name="permissions"
                                value={ permissions }
                                onChange={ handleInputChange }
                            >
                                <option value="administrador">Administrador</option>
                                <option value="recepcionista">Recepcionista</option>
                                <option value="tecnico">Técnico</option>
                            </select>
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
                                name="status"
                                value={ status }
                                onChange={ handleInputChange }
                            >
                                <option value="activo">Activo</option>
                                <option value="inactivo">Inactivo</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className='form__field--actions'>

                    { isEdit ? 
                        <input
                            type="submit"
                            className='form__submit form__submit--info  hover'
                            value="Editar datos"
                        />

                        :

                        <input
                            type="submit"
                            className='form__submit form__submit--info bg-green hover'
                            value="Agregar Usuario"
                        />
                    }
                    <input
                        type="button"
                        className='form__submit form__submit--info hover'
                        value="Limpiar formulario"
                        onClick={ handleCleanForm }
                    />
                </div>
            </form>
        </>
    );
}
 
export default FormUser;