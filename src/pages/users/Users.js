import React from 'react';

// estilos css
import '../Pages.css'

// componentes
import FormUser from '../../components/forms/user/FormUser';
import UserTable from '../../components/tables/user/UserTable';
import Cards from '../../components/ui/cards/Cards';
import NavBar from '../../components/ui/navbar/NavBar';
import UserGraph from '../../components/ui/graphics/user/UserGraph';

const Users = () => {

    
    return (
        <div className='container__page'>
            <NavBar />
            <div className="content__page">
                <Cards />
                <UserGraph />
                <FormUser
                    isEdit={false}
                />

                <UserTable />
            </div>
        </div>
    );
}
 
export default Users;