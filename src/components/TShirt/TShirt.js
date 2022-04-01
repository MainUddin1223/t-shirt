import React from 'react';
import './TShirt.css';

const TShirt = ({ tShirt, handleCart }) => {
    const { name, picture, price } = tShirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price: $ {price}</p>
            <button onClick={() => { handleCart(tShirt) }}>Add to cart</button>
        </div>
    );
};

export default TShirt;