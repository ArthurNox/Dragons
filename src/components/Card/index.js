import React from 'react';
import { useHistory } from "react-router-dom";

import { Container } from './styles';
import dragon_192 from '../../assets/dragon_192.png'

// import { Container } from './styles';

function Card({ dragon }) {
  const hystory = useHistory();

  const handleClick = (id) => {
    // console.log(id)
    hystory.push(`/detail/${id}`);
  }

  return (
    <Container onClick={() => handleClick(dragon.id)}>
      <img src={dragon_192} alt="Dragões"/>
      <h1>{dragon.name}</h1>
      <p>{dragon.type}</p>
    </Container>
  );
}

export default Card;