import clientAxios from "./axios";

// valida el token enviado por el usuario
const authToken = token => {

    // verifica que exista un token
    if( token){
        // el token es enviado por headers 'Authorization'
        clientAxios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    }else{
        // si no hay token elimina el header 'Authorization'
        delete clientAxios.defaults.headers.common['Authorization']
    }
}

export default authToken;