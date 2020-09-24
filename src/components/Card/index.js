import React from 'react';
import { useHistory } from "react-router-dom";

import { Container } from './styles';
import dragonCard from '../../assets/dragonCard.png'

// import { Container } from './styles';

function Card({ dragon }) {
  const hystory = useHistory();

  const handleClick = (id) => {
    // console.log(id)
    hystory.push(`/detail/${id}`);
  }

  return (
    <Container onClick={() => handleClick(dragon.id)}>
      <img src={dragonCard} alt="Dragões"/>
      <h1>{dragon.name}</h1>
      <p>{dragon.type}</p>
    </Container>
  );
}

export default Card;