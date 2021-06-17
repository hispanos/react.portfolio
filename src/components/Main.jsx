import React from 'react';
import About from './About';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
`

//Componentes stateless retorno implicito
const Main = ({ children }) => (
      <Container>
        {children}
      </Container>

)

export default Main;

