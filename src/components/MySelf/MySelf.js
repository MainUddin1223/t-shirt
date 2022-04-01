import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';
import Special from '../Special/Special';

const MySelf = () => {
    const [house, setHouse] = useContext(RingContext)
    return (
        <div>
            <h5>MySelf</h5>
            <p><small>House:{house}</small></p>
            <h3>Property:{setHouse}</h3>
            <button onClick={() => { setHouse(house + 1) }}>Click here</button>
            <Special></Special>
        </div>
    );
};

export default MySelf;