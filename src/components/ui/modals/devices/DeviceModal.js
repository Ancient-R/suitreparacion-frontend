import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';

// estilos css
import '../Modal.css';

// actions
import { closeModalDevice } from '../../../../actions/devicesActions';

// helpers
    // estilos de la modal
import { customStyles } from '../../../../helpers/modalStyles';
import FormDevice from '../../../forms/devices/FormDevice';


const DeviceModal = () => {

    // estado de la modal
    const  { isOpenDeviceModal } = useSelector( state => state.devices );

    // dispatch para los actions
    const dispatch = useDispatch();

    // función para cerrar modal
    const handleCloseModal = () => {
        dispatch( closeModalDevice() );
    }
    return (

        <Modal
            isOpen={ isOpenDeviceModal }
            onRequestClose={ handleCloseModal }
            style={ customStyles }
            className="modal"
            overlayClassName="modal__background"
            closeTimeoutMS={ 200 }
            ariaHideApp={ false }
        >
            <FormDevice 
                isEdit={ true }
            />
        </Modal>
    );
}
 
export default DeviceModal;