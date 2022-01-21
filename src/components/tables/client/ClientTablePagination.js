import React from 'react';
import { useSelector } from 'react-redux';

// estilos css
import '../Tables.css';

const ClientTablePagination = ({ setPage }) => {

    const { actualPage, prevPage, nextPage }  = useSelector(state => state.clients );

    return (
        
        <div className='pagination'>
        { 
                prevPage > 1 ?
                    <button 
                        className="pagination__button"
                        onClick={ () => setPage( 1 )}>1</button>
                : null
            }
            
            { prevPage ? 
                <button 
                    className="pagination__button" 
                    onClick={ ()=> setPage( prevPage)}
                    to={`${prevPage}`} 
                >{prevPage}</button>
                : null
            }
            <button
                className="pagination__button actualPage"
            >{ actualPage }</button>
            {
                nextPage ? 
                <button
                    className="pagination__button"
                    onClick={ () => setPage( nextPage )}
                >{ nextPage}</button>
                : null
            }

        </div>
    );
}
 
export default ClientTablePagination;