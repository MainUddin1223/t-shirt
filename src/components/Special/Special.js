import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    // const [house, setHouse] = useContext(RingContext);
    const [house, setHouse] = useContext(RingContext);
    return (
        <div>
            <h5>Special:{setHouse}</h5>
            <h2>{house}</h2>
            <p><small>Gift:{ }</small></p>
            <button onClick={() => { setHouse(house + 1) }}>Click here</button>
        </div>
    );
};

export default Special;