import { ABRIR_MODAL, AGREGAR_DISPOSITIVO_CORRECTO, AGREGAR_DISPOSITIVO_ERROR, CERRAR_MODAL, DISPOSITIVO_SELECCIONADO, MOSTRAR_ALERTA, OBTENER_DISPOSITIVOS_CORRECTO, OBTENER_DISPOSITIVOS_ERROR, OCULTAR_ALERTA } from '../types';

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

// función para agregar dispositivos
export const newDevice = ( device ) => {
    return async ( dispatch ) => {
        
        try {
            const res = await clientAxios.post(`${ url }/new-device`, device );
            
            if( res.data.ok ){

                dispatch({
                    type: AGREGAR_DISPOSITIVO_CORRECTO
                });

                dispatch({
                    type: MOSTRAR_ALERTA,
                    payload: res.data.msg
                });

                Alert('¡Correcto!', res.data.msg, 'success');

                setTimeout(() => {
                    dispatch({
                        type: OCULTAR_ALERTA
                    });
                }, 3000);

                dispatch( getDevices() );
            }
            
        } catch (error) {
            const err = await error.response;

            dispatch({
                type: AGREGAR_DISPOSITIVO_ERROR
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

// función para abrir modal de dispositivos
export const openModalDevice = () => {
    return ( dispatch ) => {
        dispatch({
            type: ABRIR_MODAL
        });
    }
}

// función para cerrar la modal
export const closeModalDevice = () => {
    return ( dispatch ) => {
        dispatch({
            type: CERRAR_MODAL
        });
    }
}

export const activeDevice = ( device ) => {
    return ( dispatch ) => {
        dispatch({
            type: DISPOSITIVO_SELECCIONADO,
            payload: device
        });
    }
}