import React from 'react';
import FormClient from '../../components/forms/client/FormClient';
import ClientTable from '../../components/tables/client/ClientTable';
import NavBar from '../../components/ui/navbar/NavBar';

import '../Pages.css'
const Clients = () => {
    return (
        <div className='container__page'>
            <NavBar />
            <div className="content__page">
                <FormClient
                    isEdit={false}
                />

                <ClientTable />
            </div>
        </div>
    );
}
 
export default Clients;