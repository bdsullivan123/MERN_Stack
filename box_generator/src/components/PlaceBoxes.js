import React from 'react'
import StyledBox from './BoxStyle';

const PlaceBoxes = (props) => {
    const { boxes } = props;
    return (
        <>
            {
                boxes.map((elem, i) => <StyledBox key={i} bgColor={elem.color}></StyledBox>)
            }
        </>
    );
};

export default PlaceBoxes
