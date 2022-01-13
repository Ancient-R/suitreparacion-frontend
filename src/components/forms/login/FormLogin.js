import React, { useState } from 'react';

// estilos css
import '../Form.css';

const FormLogin = () => {

    // estado para mostrar contraseña
    const [showpassword, setShowpassword] = useState(false);

    // estado del formulario
    const [values, setValues] = useState({
        username: '',
        password: ''
    });
    const { username, password } = values;

    // función para actualizar el estado del formulario
    const handleInputChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }

    // función submit para el formulario
    const handleFormSubmit = e => {
        e.preventDefault();
        console.log(values)
    }

    return (
        <div className='form__container form__container--login'>
            <form 
                className='form form__login'
                onSubmit={ handleFormSubmit}
            >

                <img src="assets/icons/logo.png" className="logo element-center" alt='logo suitreparacion'/>

                <h1 className='text-center'>Iniciar sesión</h1>

                <div className='form__field'>
                    <label 
                        className='form__label'
                    >Nombre de usuario: </label>
                    
                    <div className='form__container--input'>
                        <input 
                            className='form__input'
                            type="text"
                            placeholder='Ej. miguel2001'
                            name="username"
                            value={ username }
                            onChange={ handleInputChange }
                        />
                        <i className="fas fa-user form__icon bg-purple color-white"></i>
                    </div>
                </div>

                <div className='form__field'>
                    <label 
                        className='form__label'
                    >Contraseña: </label>
                    <div className='form__container--input'>
                        <input 
                            className='form__input'
                            type={`${showpassword ? 'text' : 'password'}`}
                            placeholder='Mínimo 8 caracteres'
                            name="password"
                            value={ password }
                            onChange={ handleInputChange }
                        />

                        <i 
                            className={`fas fa-eye fadein form__icon bg-purple color-white ${ showpassword ? 'icon-hide' : 'icon-show'}`}
                            onClick={ () => setShowpassword(!showpassword ) }
                        ></i>
                        <i 
                            className={`fas fa-eye-slash fadein form__icon icon--hide bg-purple color-white ${showpassword ? 'icon-show' : 'icon-hide'}`}
                            onClick={ () => setShowpassword( !showpassword ) }
                        ></i>
                
                    </div>
                </div>
                <div className='form__field form__field--submit'>
                    <input 
                        type="submit"
                        className='form__submit element-right bg-purple color-white hover'
                        value="iniciar sesión"
                    />
                </div>
                
            </form>
        </div>
    );
}
 
export default FormLogin;