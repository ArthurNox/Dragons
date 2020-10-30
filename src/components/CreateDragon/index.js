import React from 'react';
import { Link } from 'react-router-dom';

import { HiPlusCircle } from "react-icons/hi";

import { Container } from './styles';

function CreateDragon() {
  return(
    <Container data-tip="Create Dragon" aria-label="Create Dragon">
    <Link to={"/create"}>
      <HiPlusCircle className="create" size={120} />
    </Link>
  </Container>
  )
  
}

export default CreateDragon;