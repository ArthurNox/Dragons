import React from 'react';

import { useDragons } from '../../contexts/dragons';

import Header from '../../components/Header';
import Card from '../../components/Card';
import CreateDragon from '../../components/CreateDragon';

import { Container } from './styles';

function Home() {
  const { dragons } = useDragons();

  return (
    <>
      <Header title={"Dragões"}/>
      <Container className="cards">
        {dragons.map((dragon) => (
          <Card key={dragon.id} dragon={dragon}/>
        ))}
      </Container>
      <CreateDragon />   
    </>
  );
}

export default Home;