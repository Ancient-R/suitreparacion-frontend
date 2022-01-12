import React from 'react';

// estilos css
import './Tables.css';

const ActionsTable = () => {
    return (
        <>
            <button className="action action-update">
                <i className="fas fa-user-edit"></i>
            </button>
            <button className="action action-delete">
                <i className="fas fa-user-times"></i>
            </button>
        </>
    );
}
 
export default ActionsTable;