import React from 'react';

const Card = ({ classe, text }) => {
    return (
        <div className='card'>
            <i className={ classe }></i>
            <small className='card__total'>{ text }</small>
        </div>
    );
}
 
export default Card;