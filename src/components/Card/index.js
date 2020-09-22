import React from 'react';
import { useHistory } from "react-router-dom";

// import { Container } from './styles';

function Card({ dragon }) {
  const hystory = useHistory();

  const handleClick = (id) => {
    // console.log(id)
    hystory.push(`/detail/${id}`);
  }

  return (
    <div className="container-card" onClick={() => handleClick(dragon.id)}>
      <h1>{dragon.name}</h1>
      <p>{dragon.type}</p>
    </div>
  );
}

export default Card;