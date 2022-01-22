import React from 'react';

// estilos css
import '../Pages.css'


// componentes
import DevicesTable from '../../components/tables/devices/DevicesTable';
import Cards from '../../components/ui/cards/Cards';
import NavBar from '../../components/ui/navbar/NavBar';
import DeviceGraph from '../../components/ui/graphics/devices/DeviceGraph';

const Devices = () => {
    
    return (
        <div className='container__page'>
            <NavBar />
            <div className="content__page">
                <Cards />
                <DeviceGraph />
                <DevicesTable />
            </div>
        </div>
    );
}
 
export default Devices;