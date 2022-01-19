import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';

// estilos css
import '../Modal.css';

// helpers
import { customStyles } from '../../../../helpers/modalStyles';

// components
import FormUser from '../../../forms/user/FormUser';

// actions
import { closeModal } from '../../../../actions/usersActions';


const UserModal = () => {

    // estado de la modal
    const { isOpenUserModal } = useSelector(state => state.users );

    // dispatch
    const dispatch = useDispatch();

    const handleCloseModal = () => {
        dispatch( closeModal() );
    }

    return (
        <Modal
            isOpen={ isOpenUserModal }
            onRequestClose={ handleCloseModal }
            style={ customStyles }
            className="modal"
            overlayClassName="modal__background"
            closeTimeoutMS={ 200 }
            ariaHideApp={ false }
        >
            <FormUser 
                isEdit={ true }
            />
        </Modal>
    );
}
 
export default UserModal;