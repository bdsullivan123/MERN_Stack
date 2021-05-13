import React from 'react';
import StyledLink from './StyledLink';

const PickColor = props => {
    const { id, color1, color2 } = props;

    let num = true;
    if (isNaN(id)){
        num = false;
    }

    return (
        <div>
            {num ? <StyledLink bgColor={color2} color={color1}>The number is: {id}.</StyledLink> : <StyledLink bgColor={color1} color={color2}>The word is: {id}.</StyledLink>}
        </div>
    )
}

export default PickColor
