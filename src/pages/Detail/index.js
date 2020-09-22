import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

function Detail( ) {
  const { id } = useParams();
  const [dragonName,setDragonName] = useState(['']);
  const [dragonType, setDragonType] = useState(['']);

  const [edit, setEdit] = useState(['Editar']);
  const [read, setRead] = useState([true]);

  const parameters = {
    method: "PUT",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
      name: dragonName, 
      type: dragonType, 
    })
  }

  useEffect(() => {
    fetch(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setDragonName(json.name)
        setDragonType(json.type)
      })
  }, [])

  const handleClick = () => {
    if(edit === 'Editar'){
      setEdit('Cancelar')
    } else {
      setEdit('Editar')
    }
  }

  const updateDragon = () => {

    fetch(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${id}`, parameters)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
      })
  }

  const deleteDragon = () => {
    fetch(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${id}`, parameters)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
      })
  
  }

  return(
    <>
      <input value={dragonName} onChange={e => setDragonName(e.target.value)} />
      <input value={dragonType} onChange={e => setDragonType(e.target.value)} />
      <button onClick={() => handleClick()}>{edit}</button>
      <button onClick={() => updateDragon()}>Atualizar!</button>
      <button onClick={() => deleteDragon()}>Excluir!</button>
    </>
  );
}

export default Detail;