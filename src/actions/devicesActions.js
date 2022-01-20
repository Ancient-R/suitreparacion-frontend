import { MOSTRAR_ALERTA, OBTENER_DISPOSITIVOS_CORRECTO, OBTENER_DISPOSITIVOS_ERROR, OCULTAR_ALERTA } from '../types';

// axios para consultas a la DB
import clientAxios from '../axios/axios';

// helper para mostrar alertas
import { Alert } from '../helpers/Alert';

// variable para la api
const url = '/api/suitreparacion/devices';

// función para obtener dispositivos
export const getDevices = ( page = 1 ) => {
    return async( dispatch ) => {
        try {
            
            const res = await clientAxios.get(`${url}/get-devices/?page=${page}`);

            if( res.data.ok ){

                dispatch({
                    type: OBTENER_DISPOSITIVOS_CORRECTO,
                    payload: res.data.devices
                });
            }

        } catch (error) {
            const err = await error.response;

            dispatch({
                type: OBTENER_DISPOSITIVOS_ERROR
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