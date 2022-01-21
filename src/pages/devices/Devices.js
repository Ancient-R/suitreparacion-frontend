import React from 'react';

// estilos css
import '../Pages.css'


// componentes
import DevicesTable from '../../components/tables/devices/DevicesTable';
import Cards from '../../components/ui/cards/Cards';
import NavBar from '../../components/ui/navbar/NavBar';

const Devices = () => {
    
    return (
        <div className='container__page'>
            <NavBar />
            <div className="content__page">
                <Cards />

                <DevicesTable />
            </div>
        </div>
    );
}
 
export default Devices;