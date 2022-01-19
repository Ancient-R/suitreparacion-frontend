import { ABRIR_MODAL, AGREGAR_CLIENTE_CORRECTO, AGREGAR_CLIENTE_ERROR, CERRAR_MODAL, MOSTRAR_ALERTA, OBTENER_CLIENTES_CORRECTO, OBTENER_CLIENTES_ERROR, OCULTAR_ALERTA } from '../types';

// axios para consultas a la DB
import clientAxios from '../axios/axios';

// helper para mostrar alertas
import { Alert } from '../helpers/Alert';

// variable para la api
const url = '/api/suitreparacion/clients';


// función para obtener clientes
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


// función para agregar clientes
export const newClient = ( client ) => {
    return async ( dispatch ) => {
        
        try {
            const res = await clientAxios.post(`${ url }/new-client`, client );
            
            if( res.data.ok ){

                dispatch({
                    type: AGREGAR_CLIENTE_CORRECTO,
                    payload: client
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

                dispatch( getClients() );
            }
            
        } catch (error) {
            const err = await error.response;

            dispatch({
                type: AGREGAR_CLIENTE_ERROR
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


            // debido a que en el backend hay validación, puede retornar un arreglo de errores
                // valida que exista ese arreglo
                if( err.data.errors !== undefined){
                    dispatch({
                        type: MOSTRAR_ALERTA,
                        payload: err.data.errors.password.msg
                    });
    
                    Alert('¡Error!', err.data.errors.password.msg, 'error' );
    
                    setTimeout( () => {
                        dispatch({
                            type: OCULTAR_ALERTA
                        })
                    }, 3000)
                }
        }
    }
}

// función para abrir modal de cliente
export const openModalClient = () => {
    return ( dispatch ) => {
        dispatch({
            type: ABRIR_MODAL
        });
    }
}

// función para cerrar modal de cliente
export const closeModalClient = () => {
    return ( dispatch ) => {
        dispatch({
            type: CERRAR_MODAL
        });
    }
}