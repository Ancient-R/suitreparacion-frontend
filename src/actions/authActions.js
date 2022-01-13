import { INICIAR_SESION_CORRECTO, INICIAR_SESION_ERROR, MOSTRAR_ALERTA, OCULTAR_ALERTA } from '../types';

// axios
import clientAxios from '../axios/axios';
import { Alert } from '../helpers/Alert';


// función para hacer la consulta al backend
export const startLogin = ( user ) => {
    return async( dispatch ) => {
        try {
            const res = await clientAxios.post('/api/suitreparacion/auth', user );
            const userData = res.data;
            
            if( userData.ok ) {
                dispatch( loginUser( userData ));
            }

        } catch (error) {
            const err = await error.response;

            dispatch({
                type: INICIAR_SESION_ERROR
            });         
            
            // verifica si hay un mensaje en la respuesta
            if( err.data.msg ){
                dispatch({
                    type: MOSTRAR_ALERTA,
                    payload: err.data.msg
                });

                // muestra un alerta de error
                Alert('¡Error!', err.data.msg, 'error');

                setTimeout(() => {
                    dispatch({
                        type: OCULTAR_ALERTA
                    })
                }, 3000);
            }

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

// función para llamar al action
const loginUser = ( user ) => ({
    type: INICIAR_SESION_CORRECTO,
    payload: user 
});