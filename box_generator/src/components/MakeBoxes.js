import React from 'react'
import { useState } from 'react';
import BoxStyle from './BoxStyle';

const MakeBoxes = (props) => {
    const { submitBox } = props;
    const [box, setBox] = useState("");

    const submitHandler = e => {
        e.preventDefault();
        submitBox(box);
        setBox("");
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="box">Color</label>
                <input name="box" type="text" onChange={ e => setBox(e.target.value) } value={box}/>
            </div>
            <input type="submit" value="Add" />
        </form>
    )
}

export default MakeBoxes
