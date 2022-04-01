import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = () => {
const [house,setHouse]=useContext(RingContext)
    return (
        <div>
            <h4>Aunty</h4>
            <p>House: {house}</p>
            {house > 4 && <button onClick={() => { setHouse(house + 1) }}>Click here</button>}
        </div>
    );
};

export default Aunty;