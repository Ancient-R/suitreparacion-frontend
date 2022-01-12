import React from 'react';
import FormUser from '../../components/forms/user/FormUser';
import UserTable from '../../components/tables/user/UserTable';
import Cards from '../../components/ui/cards/Cards';
import NavBar from '../../components/ui/navbar/NavBar';

import '../Pages.css'
const Users = () => {
    return (
        <div className='container__page'>
            <NavBar />
            <div className="content__page">
                <Cards />
                <FormUser
                    isEdit={false}
                />

                <UserTable />
            </div>
        </div>
    );
}
 
export default Users;