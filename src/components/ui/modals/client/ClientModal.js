import React from 'react';
import { useSelector } from 'react-redux';
import Modal from 'react-modal';

// estilos css
import '../Modal.css';

// helpers
import { customStyles } from '../../../../helpers/modalStyles';

// components
import FormClient from '../../../forms/client/FormClient';


const ClientModal = () => {

    // estado de la modal
    const { isOpenClientModal } = useSelector(state => state.clients );

    const handleCloseModal = () => {
        console.log('Cerrar modal');
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