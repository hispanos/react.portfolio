import React from 'react'
import styled from 'styled-components';

const DivSidebar = styled.div`
    width: 30%;
`

const Sidebar = ({ children }) => {

    return (
        <DivSidebar>
            {children}
        </DivSidebar>
    )
}

export default Sidebar;