import React from 'react';
import {FiArrowRight} from 'react-icons/fi'
import logoImg from '../../assets/images/logo.svg';
import {Link} from 'react-router-dom'

import {LandingContainer, ContentWrapper, Main, LocationContainer, EnterAppButton } from './styles';

function Landing(){

  return(
    <LandingContainer>
     <ContentWrapper>
        <img src={logoImg} alt="logo"/>

        <Main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </Main>

        <LocationContainer>
          <strong>Santo Amaro</strong>
          <span>Bahia</span>
        </LocationContainer>
        
        <EnterAppButton>
        <Link to="/app">
          <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
        </Link>
        </EnterAppButton>
     </ContentWrapper>
   </LandingContainer>
  )
}



export default Landing;