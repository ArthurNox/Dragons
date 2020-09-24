import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { format } from 'date-fns';

import { Container } from './styles';
import Header from '../../components/Header';
import dragonDetail from '../../assets/dragonDetail.png'

function Detail( ) {
  const { id } = useParams();
  const [dragonName,setDragonName] = useState(['']);
  const [dragonType, setDragonType] = useState(['']);

  // const [edit, setEdit] = useState(['Editar']);
  // const [read, setRead] = useState([true]);

  useEffect(() => {
    fetch(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setDragonName(json.name)
        setDragonType(json.type)
      })
  }, [id])

  // const handleClick = () => {
  //   if(edit === 'Editar'){
  //     setEdit('Cancelar')
  //   } else {
  //     setEdit('Editar')
  //   }
  // }

  const updateDragon = () => { 
    fetch(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${id}`, {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        name: dragonName, 
        type: dragonType, 
      })})
    .then((res) => res.json())
    .then((json) => {
      console.log(json)
    })
  }
  
  const deleteDragon = () => {
    fetch(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${id}`, {
      method: "DELETE",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
      name: dragonName, 
      type: dragonType, 
      })})
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
      })
  }

  return(
    <>
      <Header />
      <Container>
        <img src={dragonDetail} />
        <form>
          <input value={dragonName} onChange={e => setDragonName(e.target.value)} />
          <input value={dragonType} onChange={e => setDragonType(e.target.value)} />
          {/* <button onClick={() => handleClick()}>{edit}</button> */}
          <button onClick={() => updateDragon()}>Atualizar</button>
          <button onClick={() => deleteDragon()}>Excluir</button> 
        </form>
      </Container> 
    </>
  );
}

export default Detail;