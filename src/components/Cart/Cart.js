import React from 'react';
import './Cart.css';

const Cart = ({ cart, removeFromCart, clearCart }) => {
    // Conditional rendering options
    // 1. Element variable
    // 2. ternary operator condition ? true : false   
    // 3. && Operator (shorthand)
    // 4. || 
    let command;
    if (cart.length === 0) {
        command = <div>
            <h5>ohh Kipta, khoroch kor</h5>
            <p>kinos na ken</p>
        </div>
    }
    else if (cart.length === 1) {
        command = <p>Please add more...</p>
    }
    // else if (cart.length > 4) {
    //     alert('you can not add more than 4')
    // }
    else {
        command = <p><small>Thanks for adding item</small></p>
    }

    return (
        <div>
            {
                cart.map(tShirt => <div><p>{tShirt.name}</p>
                    <button onClick={() => { removeFromCart(tShirt) }}>X</button></div>)
            }
            <h1>{command}</h1>
            {
                cart.length !== 4 ? <p>keep adding</p> : <button onClick={clearCart}>Clear All</button>
            }
            {
                cart.length === 4 && <button>review item</button>
            }
        </div>
    );
};

export default Cart;