import React from "react";
import {Container, InfoContainer, Img} from './styles'

function UserInf(props) {
  return (
      <Container>
        <Img src={props.UsrImg} alt="Foto de Leonardo"/>
        <InfoContainer>
            <a href="https://platzi.com/@L3oNav/" target="_blank">
              <h1>{props.UsrName}</h1>
              <h3>{props.UsrJob}</h3>
            </a>
            <h3>click &#8593;</h3>
        </InfoContainer>
      </Container>
  );
}

export default UserInf;
