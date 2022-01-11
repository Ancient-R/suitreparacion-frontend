import React from 'react';
import FormUser from '../../components/forms/user/FormUser';
// import ClientTable from '../../components/tables/client/ClientTable';
import NavBar from '../../components/ui/navbar/NavBar';

import '../Pages.css'
const Users = () => {
    return (
        <div className='container__page'>
            <NavBar />
            <div className="content__page">
                <FormUser
                    isEdit={true}
                />

                {/* <ClientTable /> */}
            </div>
        </div>
    );
}
 
export default Users;