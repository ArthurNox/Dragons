import React, { useState  } from 'react';

//import { Container } from './styles';
import Header from '../../components/Header'
import Form from '../../components/Form'

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
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
      })
  }

  return (
    <>
    <Header />
    <Form onSubmit={createDragon}>
      <label>Nome</label>
      <input type="text" onChange={e => setDragonName(e.target.value)}/>
      <label>Tipo</label>
      <input type="text" onChange={e => setDragonType(e.target.value)}/>
      <button type="submit" >Criar</button>
    </Form>
    </>
  );
}

export default Create;