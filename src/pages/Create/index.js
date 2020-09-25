import React, { useState  } from 'react';

import { Container } from './styles';
import Header from '../../components/Header';
import dragonCreate from '../../assets/dragonCreate.png';

function Create() {
  const [dragonName,setDragonName] = useState([''])
  const [dragonType, setDragonType] = useState([''])

  const params = {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
      name: dragonName, 
      type: dragonType, 
    })
  }
  
  const createDragon = (e) => {
    e.preventDefault();

    fetch("http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon", params)
    .then((json) => {
      console.log(json)
      if (json.status === 201) {
        window.location.href = '/home';
      }
    })
    
  }

  return (
    <>
    <Header title={"Novo Dragão"} buttonBack/>
    <Container>
      <img alt={'Dragon Avatar'} src={dragonCreate} />
      <form >
        <input placeholder="Nome" type="text" onChange={e => setDragonName(e.target.value)}/>
        <input placeholder="Tipo" type="text" onChange={e => setDragonType(e.target.value)}/>
        <button type="button" onClick={createDragon}>Criar</button>
      </form>
    </Container>
    </>
  );
}

export default Create;