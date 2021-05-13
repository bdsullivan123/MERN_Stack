import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.p`
    color: ${props => props.color};
    background-color: ${props => props.bgColor};
`;

export default StyledLink;