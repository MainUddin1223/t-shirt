import React, { useState } from 'react';
import useTShirts from '../../hooks/useTShirts';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css';

const Home = () => {
    const [tshirts, setTshirts] = useTShirts();
    const [cart, setCart] = useState([]);
    const handleCart = clickedItem => {
        const exist = cart.find(item => item._id === clickedItem._id);
        if (exist) {
            alert('Item already selected')
        }
        else if (cart.length >= 4) {
            alert('You can not add more than 4 Items')
        }
        else {
            const newCart = [...cart, clickedItem];
            setCart(newCart)
        }


    }
    const removeFromCart = (item) => {
        const rest = cart.filter(itemCart => itemCart._id !== item._id);
        setCart(rest)
    }
    const clearCart = () => {
        setCart([])
    }

    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tshirts.map(tShirt => <TShirt
                        key={tShirt._id}
                        tShirt={tShirt}
                        handleCart={handleCart}>

                    </TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}
                    removeFromCart={removeFromCart}
                    clearCart={clearCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;