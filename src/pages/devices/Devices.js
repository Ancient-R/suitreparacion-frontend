import React from 'react';
import FormDevice from '../../components/forms/devices/FormDevice';
import NavBar from '../../components/ui/navbar/NavBar';

import '../Pages.css'
const Devices = () => {
    return (
        <div className='container__page'>
            <NavBar />
            <div className="content__page">
                <FormDevice 
                    isEdit={true}
                />
            </div>
        </div>
    );
}
 
export default Devices;