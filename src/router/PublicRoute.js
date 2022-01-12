import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }) => {
    
    const logged = true

    return logged ? <Navigate to="/" /> : children
}