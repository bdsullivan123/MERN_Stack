import React from 'react'

const WordComponent = props => {
    const { id } = props;

    let num = true;
    if (isNaN(id)){
        num = false;
    }

    return (
        <div>
            {num ? <p>The Number is: {id}</p> : <p>The Word is {id}.</p>}
        </div>
    )
}

export default WordComponent
