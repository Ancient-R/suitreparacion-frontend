import { MOSTRAR_ALERTA, OBTENER_USUARIOS_CORRECTO, OBTENER_USUARIOS_ERROR, OCULTAR_ALERTA } from '../types';

// axios para consulta a la DB
import clientAxios from '../axios/axios';

// helper para mostrar alertas
import { Alert } from '../helpers/Alert';

export const getUsers = (page) => {
    return async ( dispatch ) => {
        
        try {
            
            const res = await clientAxios.get(`/api/suitreparacion/users/get-users/?page=${page}`);
            console.log( res );
            console.log( res.data.users )
            if( res.data.ok ){

                dispatch({
                    type: OBTENER_USUARIOS_CORRECTO,
                    payload: res.data.users
                });
            }

        } catch (error) {
            const err = await error.response;

            dispatch({
                type: OBTENER_USUARIOS_ERROR
            });

            dispatch({
                type: MOSTRAR_ALERTA,
                payload: err.data.msg
            });

            Alert('¡Error!', err.data.msg, 'error');

            setTimeout(() => {
                dispatch({
                    type: OCULTAR_ALERTA
                });
            }, 3000);

        }
    }
}