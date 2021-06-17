import React from "react";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import About from "../components/About";
import Information from "../components/Information";
import Education from "../components/Education";
import { createGlobalStyle } from "styled-components";
//Componente como función tipo stateful

//importando estilos
import "../styles/App.css";

const informations = [
  {
    title: "Estudios",
    data: [
      {
        subtitle: "UNAD - 2015",
        text: "Técnica de Sistemas"
      },
      {
        subtitle: "SENA - 2012",
        text: "Técnico ambiental"
      }
    ]
  },
  {
    title: "Experiencia",
    data: [
      {
        subtitle: "Programador web",
        text: "Desarrollar aplicaciones POS"
      }
    ]
  },
  {
    title: "Certificaciones",
    data: [
      {
        subtitle: "Google Cloud Plataform",
        text: ""
      }
    ]
  }
];

const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Lato', sans-serif;
        margin: 0;
        padding: 0;
        background: #F5F5F5;
    }
    
`;

const App = () => {
  return (
      <Main>
        <GlobalStyle />
        <Sidebar>
          <About />
        </Sidebar>
        <Information>

          {
            informations.map((info) => {
              return (
                <Education 
                  key= {info.title}
                  title = {info.title}
                  data = {info.data}
                />
              )
            })
          }
          
        </Information>
      </Main>
  );
};

export default App;
