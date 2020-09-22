import React, { useState, useEffect } from 'react';

// import { Container } from './styles';
import Card from '../../components/Card'
import { alphabeticalOrder } from '../../helpers/alphabeticalOrder';

function Home() {
  let [dragons, setDragons] = useState([])

  useEffect(() => {
    fetch("http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon")
      .then((res) => res.json())
      .then((json) => {
        
        setDragons(alphabeticalOrder(json))
      })
  }, [])


  return (
    <>
    {dragons.map((dragon) => (
      <Card key={dragon.id} dragon={dragon}/>
    ))}
  </>
  );
}

export default Home;