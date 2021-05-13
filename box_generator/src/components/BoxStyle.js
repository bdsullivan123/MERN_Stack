import React from 'react';
import styled from 'styled-components';

const BoxStyle = styled.div`
    border: 1px solid black;
    background-color: ${props => props.bgColor};
    width: 100px;
    height: 100px;
`;

export default BoxStyle;