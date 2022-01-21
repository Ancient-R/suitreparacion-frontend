import { AGREGAR_USUARIO_CORRECTO, AGREGAR_USUARIO_ERROR, ELIMINAR_USUARIO_CORRECTO, ELIMINAR_USUARIO_ERROR, MOSTRAR_ALERTA, OBTENER_USUARIOS_CORRECTO, OBTENER_USUARIOS_ERROR, OCULTAR_ALERTA, USUARIO_SELECCIONADO, ABRIR_MODAL, CERRAR_MODAL, ACTUALIZAR_USUARIO_ERROR, ACTUALIZAR_USUARIO_CORRECTO, LIMPIAR_ESTADO_USUARIOS } from '../types';

// axios para consulta a la DB
import clientAxios from '../axios/axios';

// helper para mostrar alertas
import { Alert } from '../helpers/Alert';

// variable para la api
const url = '/api/suitreparacion/users';

// función para obtener los usuarios de la DB
export const getUsers = (page = 1 ) => {
    return async ( dispatch ) => {
        
        try {
            
            const res = await clientAxios.get(`${url}/get-users/?page=${page}`);
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

// función para agregar un nuevo usuario
export const newUser = ( user ) => {
    return async ( dispatch ) => {
        
        try {
            const res = await clientAxios.post(`${ url }/new-user`, user );
            
            if( res.data.ok ){

                dispatch({
                    type: AGREGAR_USUARIO_CORRECTO,
                    payload: user
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

                dispatch( getUsers() );
            }
            
        } catch (error) {
            const err = await error.response;

            dispatch({
                type: AGREGAR_USUARIO_ERROR
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

// función para abrir modal
export const openModal = () => {
    return ( dispatch ) => {
        dispatch({
            type: ABRIR_MODAL
        });
    }
}

// función para cerrar modal
export const closeModal = () => {
    return ( dispatch ) => {
        dispatch({
            type: CERRAR_MODAL
        });
    }
}

// función para poner al usuario que se va a editar o eliminar, en el state, para poder saber que usuario es
export const activeUser = ( user ) => {
    return async ( dispatch ) => {

        dispatch({
            type: USUARIO_SELECCIONADO,
            payload: user
        });
    }
}

// función para editar un usuario de la DB
export const updateUser = ( user, id ) => {
    return async ( dispatch ) => {

        try {

            const res = await clientAxios.put(`${ url }/update-user/${ id }`, user );
        
            // se agrega el id al usuario, debido a que no lo tiene
            user._id = id;
            
            if( res.data.ok ){

        
                dispatch({
                    type: ACTUALIZAR_USUARIO_CORRECTO,
                    payload: user
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

                dispatch( closeModal() );
        
            }
            
        } catch (error) {
            const err = await error.response;
        
            dispatch({
                type: ACTUALIZAR_USUARIO_ERROR
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

// función para eliminar un usuario de la DB
export const deleteUser = ( id ) => {
    return async ( dispatch ) => {
        
        try {
            
            const res = await clientAxios.delete(`${ url }/delete-user/${ id }`);

            if( res.data.ok ){

                dispatch({
                    type: ELIMINAR_USUARIO_CORRECTO
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
                type: ELIMINAR_USUARIO_ERROR
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

// función para limpiar el state de usuarios
export const logoutCleanUsers = () => {
    return ( dispatch ) => {
        dispatch({
            type: LIMPIAR_ESTADO_USUARIOS
        });
    }
}