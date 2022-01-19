import Swal from "sweetalert2";

// muestra una alerta de sweetAlert
export const Alert = ( title, message, type ) => {
    Swal.fire(
        title,
        message,
        type
    );
}


// muestra una alerta de advertencia para cuando se quiere eliminar un usuario, cliente o dispositivo

    // recibe tres parametros un id, el dispatch y la función
export const alertDelete = ( id, dispatch, deleteFun ) => {
    Swal.fire({
        title: '¿Estas seguro?',
        text: "Esta acción es irreversible",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
            // paso por parametros el dispatch y la función de eliminar
            dispatch( deleteFun( id ) );
        }
      })
}