import React from 'react';

// componentes
import FormClient from '../../components/forms/client/FormClient';
import ClientTable from '../../components/tables/client/ClientTable';
import Cards from '../../components/ui/cards/Cards';
import NavBar from '../../components/ui/navbar/NavBar';

// estilos css
import '../Pages.css'


const Clients = () => {

    return (
        <div className='container__page'>
            <NavBar />
            <div className="content__page">
                <Cards />
                <FormClient
                    isEdit={false}
                />

                <ClientTable />
            </div>
        </div>
    );
}
 
export default Clients;