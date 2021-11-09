// Importantando o React
import React from "react";
// Importantando o component Home
import Home from "./components/home/home";
// Importantando o component Contact

// Importando os components necessárias da lib react-materialize
import { Container } from 'react-materialize';
// Importanto o component <Switch /> e <Route /> da nossa Lib de rotas
import { Switch, Route } from 'react-router-dom';
import cursos from "./components/cursos/cursos";



const Main = () => (
  <main>
    <Container>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/cursos' component={cursos}/>

      </Switch>
    </Container>
  </main>  
);

export default Main;