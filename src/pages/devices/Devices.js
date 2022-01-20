import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// estilos css
import '../Pages.css'


// componentes
import FormDevice from '../../components/forms/devices/FormDevice';
import DevicesTable from '../../components/tables/devices/DevicesTable';
import Cards from '../../components/ui/cards/Cards';
import NavBar from '../../components/ui/navbar/NavBar';

// actions 
import { getDevices } from '../../actions/devicesActions';
const Devices = () => {


    // accediendo al state de autenticación
    const { logged } = useSelector( state => state.auth );

    const dispatch = useDispatch();
    // dispatch para los actions
    useEffect( () => {

        if( logged ) dispatch( getDevices() );

        // eslint-disable-next-line
    }, [ logged ]);
    return (
        <div className='container__page'>
            <NavBar />
            <div className="content__page">
                <Cards />
                <FormDevice 
                    isEdit={true}
                />

                <DevicesTable />
            </div>
        </div>
    );
}
 
export default Devices;