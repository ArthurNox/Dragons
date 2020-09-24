import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from "react-router-dom";
import { format } from 'date-fns';
import { HiPencilAlt, HiClipboardCopy, HiRefresh, HiXCircle } from "react-icons/hi";

import { Container } from './styles';
import Header from '../../components/Header';
import dragonDetail from '../../assets/dragonDetail.png';
import CreateDragon from '../../components/CreateDragon';

function Detail( ) {
  const { id } = useParams();
  
  const [dragonName,setDragonName] = useState('');
  const [dragonType,setDragonType] = useState('');
  const [dragonDate, setDragonDate] = useState('');
  const [editable, setEditable] = useState([false]);


  useEffect(() => {
    fetch(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setDragonName(json.name)
        setDragonType(json.type)

  
        setDragonDate(json.createdAt)
      })
  }, [id])

  if(editable){
    console.log('true')
  } else {
    console.log('false')
  }

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
      <Header title={"Detalhes"} buttonBack/>
      <Container>
        <img src={dragonDetail} />
        <p>Criado em: {dragonDate}</p>
        <form>
          <input value={dragonName} onChange={e => setDragonName(e.target.value)} />
          <input value={dragonType} onChange={e => setDragonType(e.target.value)} />
          <div className={editable ? 'hidden' : ''} >
            <HiRefresh className="update-icon" size={50} onClick={() => updateDragon()} />
            <HiXCircle className="delete-icon" size={50} onClick={() => deleteDragon()} />
          </div>
        </form>
          <div className="edit-content" onClick={ e => editable ? setEditable(false) : setEditable(true)}>
            {editable ? 
            (<HiPencilAlt className="edit-icon" size={60} />) 
              : 
            (<HiClipboardCopy className="edited-icon" size={60} />)}
          </div>
      </Container> 
      <CreateDragon />
    </>
  );
}

export default Detail;