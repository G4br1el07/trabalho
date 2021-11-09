// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card} from 'react-materialize';
// Importando o componenet UserProfile
import UserProfile from '../user_profile/user_profile'
// Importando o component Experience
import Experience from '../experience/experience'
// Importando o avatar da empresa 1
import company_avatar from '../../images/company.png';
// Importando o avatar da empresa 1
import company_avatar2 from '../../images/bg.jpg';

const Home = () => (
   <div class="row col s4 m6">

  
  
       <div class="row">
    <div class="col s12 m6">
      <div class="card blue-grey darken-1 ">
        <div class="card-content white-text right-align">
          <span class="card-title">Sobre a empresa</span>
          <p>Empresa especializada em ensinar </p>
        </div>
   
      </div>
    </div>
  </div>
            

            
        <footer class="page-footer " >
          <div class="container right-align">
            <div class="row">
              <div class="col l8 s4">
                <h5 class="white-text">Dev Cursos</h5>
                <p class="grey-text text-lighten-4">Novos conteúdos</p>
              </div>
              <div class="col l4  s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2014 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>

    
  </div>
);

export default Home;