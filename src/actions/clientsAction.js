import { MOSTRAR_ALERTA, OBTENER_CLIENTES_CORRECTO, OBTENER_CLIENTES_ERROR, OCULTAR_ALERTA } from '../types';

// axios para consultas a la DB
import clientAxios from '../axios/axios';

// helper para mostrar alertas
import { Alert } from '../helpers/Alert';

// variable para la api
const url = '/api/suitreparacion/clients';

export const getClients = ( page = 1 ) => {
    
    return async ( dispatch ) => {
        try {
            
            const res = await clientAxios.get(`${url}/get-clients/?page=${page}`);

            if( res.data.ok ){

                dispatch({
                    type: OBTENER_CLIENTES_CORRECTO,
                    payload: res.data.clients
                });
            }

        } catch (error) {
            const err = await error.response;

            dispatch({
                type: OBTENER_CLIENTES_ERROR
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