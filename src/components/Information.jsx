import React from 'react';
import styled from 'styled-components';

const DivInformation = styled.div`
    width: 70%;
`

const Information = ({ children }) => {
    return (
        <DivInformation>
            { children }
        </DivInformation>
    )
}

export default Information;