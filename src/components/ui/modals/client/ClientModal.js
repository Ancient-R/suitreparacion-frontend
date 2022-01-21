import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';

// estilos css
import '../Modal.css';

// helpers
import { customStyles } from '../../../../helpers/modalStyles';

// components
import FormClient from '../../../forms/client/FormClient';

// actions
import { closeModalClient } from '../../../../actions/clientsAction';
import { logoutCleanDevices } from '../../../../actions/devicesActions';


const ClientModal = () => {

    // estado de la modal
    const { isOpenClientModal } = useSelector(state => state.clients );

    // accediendo al state de dispositivos, para limpiar su state al cerrar la modal
    const { devices } = useSelector( state => state.devices );

    // dispatch para action
    const dispatch = useDispatch();

    const handleCloseModal = () => {
        dispatch( closeModalClient() );
        // limpia el state de dispositivos para que al momento de abrir la información de otro cliente, no se muestren los dispositivos cargados en el state
        if( devices ) dispatch( logoutCleanDevices() );
    }

    return (
        <Modal
            isOpen={ isOpenClientModal }
            onRequestClose={ handleCloseModal }
            style={ customStyles }
            className="modal"
            overlayClassName="modal__background"
            closeTimeoutMS={ 200 }
            ariaHideApp={ false }
        >
            <FormClient
                isEdit={ true }
            />
        </Modal>
    );
}
 
export default ClientModal;