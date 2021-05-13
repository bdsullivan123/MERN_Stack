import React from 'react';
import { useState } from 'react';

const NumberComponent = () => {
    const [number, setNumber] = useState(0);
    return (
        <div>
            <h1>The number is: { number }</h1>
        </div>
    )
}

export default NumberComponent
