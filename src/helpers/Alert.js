import Swal from "sweetalert2";

// muestra una alerta de sweetAlert
export const Alert = ( title, message, type ) => {
    Swal.fire(
        title,
        message,
        type
    );
}