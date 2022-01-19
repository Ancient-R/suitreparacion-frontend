import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// componentes
import FormClient from '../../components/forms/client/FormClient';
import ClientTable from '../../components/tables/client/ClientTable';
import Cards from '../../components/ui/cards/Cards';
import NavBar from '../../components/ui/navbar/NavBar';

// estilos css
import '../Pages.css'

// actions
import { getClients } from '../../actions/clientsAction';

const Clients = () => {

    // accediendo al state de usuarios
    const { logged, permissions } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {

        if( logged && ( permissions === 'administrador' || permissions === 'recepcionista') ) dispatch( getClients() );


        // eslint-disable-next-line
    }, [ logged, permissions ]);
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