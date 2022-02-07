import React from 'react';

const Card = (props) => {
    return (

        <div className='card'>
            <div className='card-body'>
                <img src={props.img} alt='desert' className='card-img' />
            </div>
            <div className='card-titile'>
                <h2>{props.title}</h2>
            </div>
        </div>

    )
};

export default Card;
