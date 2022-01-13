import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }) => {
    
    const { logged, permissions } = useSelector(state => state.auth);

    // si está logueado el usuario, lo redirecciona a la página principal
    if( logged ){

        // debido a que hay tres tipos de usuarios, dependiendo el que inicie sesión, va a ser redireccionado a su ruta
        switch( permissions ) {
            case 'administrador':
                return <Navigate to='/usuarios' />
            
            case 'recepcionista':
                return <Navigate to='/clientes' />

            case 'tecnico':
                return <Navigate to='/dispositivos' />

            default:
                return <Navigate to='/404' />
                
        }

    }else return children
}