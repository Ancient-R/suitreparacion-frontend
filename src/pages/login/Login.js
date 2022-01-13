import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { authUser } from '../../actions/authActions';

// components
import FormLogin from '../../components/forms/login/FormLogin';

const LoginPage = () => {

    const { logged, permissions } = useSelector(state => state.auth);
    const navigate = useNavigate();

    // dispatch para actions
    const dispatch = useDispatch();

    useEffect( () => {

        // si está logueado el usuario, lo redirecciona a la página principal
        if( logged ){

            // debido a que hay tres tipos de usuarios, dependiendo el que inicie sesión, va a ser redireccionado a su ruta
            switch( permissions ) {
                case 'administrador':
                    navigate('/usuarios')
                    break;
                
                case 'recepcionista':
                    navigate('/clientes')
                    break;

                case 'tecnico':
                    navigate('/dispositivos')
                    break;

                default:
                    navigate('/404');
                    break;
            }
        }

        // verifica el token de localStorage
        const token = localStorage.getItem('suitreparacion-token');
        
        if( token) dispatch( authUser( token ) )
        

        // eslint-disable-next-line
    }, [ logged ]);
    return (

        <div className='container'>
            <FormLogin />
        </div>
    );
}
 
export default LoginPage;