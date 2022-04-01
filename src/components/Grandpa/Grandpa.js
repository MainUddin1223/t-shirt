import React, { createContext, useState } from 'react';
import Uncle from '../Uncle/Uncle';
import Father from '../Father/Father';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css';
/**
 * context api
 * 1. call createContext with a default value
 * 2. set a variable of the context with uppercase
 * 3. Make sure you export the context to use it in other places
 * 4. Wrap you child content using RingContext.Provider
 * 5. Provide a value
 * 6. to consume the context from child component
 * 7. useContext hook and you will you need to pass the contextName
 * 8. Make sure you take notes...
 *  */


export const RingContext = createContext('ring');

const Grandpa = () => {

    const [house, setHouse] = useState(1);
    const ornaments = 'golden Ring';
    const property = '$100M';
    const increaseBtn = () => {
        const newHouse = house + 1;
        setHouse(newHouse)
    }
    return (
        <RingContext.Provider value={[house, setHouse]}>
            <div>
                <div className='grandpa'>
                    <h1>GrandPa</h1>
                    <p>{house}</p>
                    <button onClick={increaseBtn}>Click here</button>
                    <div style={{ display: 'flex' }}>
                        <Father house={house}></Father>
                        <Uncle house={house}></Uncle>
                        <Aunty house={house}></Aunty>
                    </div>
                </div>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;