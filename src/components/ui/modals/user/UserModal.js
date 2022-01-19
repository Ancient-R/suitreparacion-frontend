import React from 'react';
import Modal from 'react-modal';

// estilos css
import '../Modal.css';

// helpers
import { customStyles } from '../../../../helpers/modalStyles';

// components
import FormUser from '../../../forms/user/FormUser';


const UserModal = () => {

    const handleCloseModal = () => {
        console.log('Cerrando modal...');
    }

    return (
        <Modal
            isOpen={ true }
            onRequestClose={ handleCloseModal }
            style={ customStyles }
            className="modal"
            overlayClassName="modal__background"
            closeTimeoutMS={ 200 }
        >
            <FormUser 
                isEdit={ true }
            />
        </Modal>
    );
}
 
export default UserModal;