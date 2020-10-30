import React, { useState } from "react";
import ReactTooltip from "react-tooltip";

import { Container } from "./styles";
import Header from "../../components/Header";
import dragonCreate from "../../assets/dragonCreate.png";

import { useApiCallReducer } from "../../helpers/useApiCallReducer.js";

function Create() {
  const [state, dispatch] = useApiCallReducer();
  const [dragonName, setDragonName] = useState("");
  const [dragonType, setDragonType] = useState("");

  const createDragon = () => {
    if (dragonName && dragonType) {
      dispatch({
        type: "CREATE",
        payload: { name: dragonName, type: dragonType },
      });
    }
  };

  return (
    <>
      <Header title={"Novo Dragão"} buttonBack />
      <Container>
        <img alt={"Dragon Avatar"} src={dragonCreate} />
        <form>
          <input
            placeholder="Name"
            type="text"
            onChange={(e) => setDragonName(e.target.value)}
          />
          <input
            placeholder="Type"
            type="text"
            onChange={(e) => setDragonType(e.target.value)}
          />
          <button type="button" onClick={createDragon}>
            Criar
          </button>
        </form>
      </Container>
      <ReactTooltip />
    </>
  );
}

export default Create;
