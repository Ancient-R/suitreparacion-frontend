import { ABRIR_MODAL_CLIENTE, ACTUALIZAR_CLIENTE_CORRECTO, ACTUALIZAR_CLIENTE_ERROR, AGREGAR_CLIENTE_CORRECTO, AGREGAR_CLIENTE_ERROR, CERRAR_MODAL_CLIENTE, CLIENTE_SELECCIONADO, ELIMINAR_CLIENTE_CORRECTO, ELIMINAR_CLIENTE_ERROR, LIMPIAR_ESTADO_CLIENTES, MOSTRAR_ALERTA, OBTENER_CLIENTES_CORRECTO, OBTENER_CLIENTES_ERROR, OCULTAR_ALERTA } from '../types';

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
        }
    }
}

// función para abrir modal de cliente
export const openModalClient = () => {
    return ( dispatch ) => {
        dispatch({
            type: ABRIR_MODAL_CLIENTE
        });
    }
}

// función para cerrar modal de cliente
export const closeModalClient = () => {
    return ( dispatch ) => {
        dispatch({
            type: CERRAR_MODAL_CLIENTE
        });
    }
}

// función para poner en state al cliente seleccionado
export const activeClient = ( client ) => {
    return ( dispatch ) => {

        dispatch({
            type: CLIENTE_SELECCIONADO,
            payload: client
        });
    }
}

// función para actualizar datos de cliente
export const updateClient = ( client, id ) => {
    return async ( dispatch ) => {
        try {

            console.log( id );

            const res = await clientAxios.put(`${ url }/update-client/${ id }`, client );
        
            // se agrega el id al usuario, debido a que no lo tiene
            client._id = id;
            
            if( res.data.ok ){

        
                dispatch({
                    type: ACTUALIZAR_CLIENTE_CORRECTO,
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

                dispatch( closeModalClient() );
        
            }
            
        } catch (error) {
            const err = await error.response;
        
            dispatch({
                type: ACTUALIZAR_CLIENTE_ERROR
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

// función para eliminar cliente
export const deleteClient = ( id ) => {
    return async ( dispatch ) => {
        try {
            
            const res = await clientAxios.delete(`${ url }/delete-client/${ id }`);

            if( res.data.ok ){

                dispatch({
                    type: ELIMINAR_CLIENTE_CORRECTO
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
                type: ELIMINAR_CLIENTE_ERROR
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

// función para limpiar el state de clientes
export const logoutCleanClients = () => {
    return ( dispatch ) => {
        dispatch({
            type: LIMPIAR_ESTADO_CLIENTES
        });
    }
}