import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';

// estilos css
import '../Modal.css';

// helpers
import { customStyles } from '../../../../helpers/modalStyles';

// components
import FormClient from '../../../forms/client/FormClient';
import { closeModalClient } from '../../../../actions/clientsAction';


const ClientModal = () => {

    // estado de la modal
    const { isOpenClientModal } = useSelector(state => state.clients );

    // dispatch para action
    const dispatch = useDispatch();

    const handleCloseModal = () => {
        dispatch( closeModalClient() );
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