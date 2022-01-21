import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// estilos css
import '../Pages.css'

// componentes
import FormUser from '../../components/forms/user/FormUser';
import UserTable from '../../components/tables/user/UserTable';
import Cards from '../../components/ui/cards/Cards';
import NavBar from '../../components/ui/navbar/NavBar';


// actions
import { getUsers } from '../../actions/usersActions';
import UserGraph from '../../components/ui/graphics/user/UserGraph';

const Users = () => {

    // accediendo al state de auth
    const { logged, permissions } = useSelector( state => state.auth );
    // dispatch para los actions
    const dispatch = useDispatch();

    useEffect( () => {
        if( logged && permissions === 'administrador') dispatch( getUsers() );

        // eslint-disable-next-line
    }, [ logged, permissions ]);
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