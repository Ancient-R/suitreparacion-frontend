import { ABRIR_MODAL_DISPOSITIVO, ACTUALIZAR_DISPOSITIVO_CORRECTO, ACTUALIZAR_DISPOSITIVO_ERROR, AGREGAR_DISPOSITIVO_CORRECTO, AGREGAR_DISPOSITIVO_ERROR, CERRAR_MODAL_DISPOSITIVO, DISPOSITIVO_SELECCIONADO, ELIMINAR_DISPOSITIVO_CORRECTO, ELIMINAR_DISPOSITIVO_ERROR, LIMPIAR_ESTADO_DISPOSITIVOS, MOSTRAR_ALERTA, OBTENER_DISPOSITIVOS_CORRECTO, OBTENER_DISPOSITIVOS_ERROR, OCULTAR_ALERTA } from '../types';

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
            type: ABRIR_MODAL_DISPOSITIVO
        });
    }
}

// función para cerrar la modal
export const closeModalDevice = () => {
    return ( dispatch ) => {
        dispatch({
            type: CERRAR_MODAL_DISPOSITIVO
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

// función para actualizar dispositivos
export const updateDevice = ( device, id ) => {
    return async ( dispatch ) => {
        try {

            const res = await clientAxios.put(`${ url }/update-device/${ id }`, device );
        
            // se agrega el id al usuario, debido a que no lo tiene
            device._id = id;
            
            if( res.data.ok ){

        
                dispatch({
                    type: ACTUALIZAR_DISPOSITIVO_CORRECTO,
                    payload: device
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

                dispatch( closeModalDevice() );
        
            }
            
        } catch (error) {
            const err = await error.response;
        
            dispatch({
                type: ACTUALIZAR_DISPOSITIVO_ERROR
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

// función para eliminar dispositivos
export const deleteDevice = ( id ) => {
    return async ( dispatch ) => {
        try {
            
            const res = await clientAxios.delete(`${ url }/delete-device/${ id }`);

            if( res.data.ok ){

                dispatch({
                    type: ELIMINAR_DISPOSITIVO_CORRECTO
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

            }
        } catch (error) {
            const err = await error.response;

            dispatch({
                type: ELIMINAR_DISPOSITIVO_ERROR
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

// función para limpiar el state de dispositivos
export const logoutCleanDevices = () => {
    return ( dispatch ) => {
        dispatch({
            type: LIMPIAR_ESTADO_DISPOSITIVOS
        });
    }
}