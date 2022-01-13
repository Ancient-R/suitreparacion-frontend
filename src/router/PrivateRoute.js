import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
    
    // verificamos que este loguedo, si no lo está, lo lleva a iniciar sesión
    const { logged } = useSelector(state => state.auth);

    return logged ? children : <Navigate to="/iniciar-sesion" />
}