import React, { createContext, useContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

import { alphabeticalOrder } from "../../helpers/alphabeticalOrder";

const DragonsContext = createContext({});

export const DragonsProvider = ({ children }) => {
  const [dragons, setDragons] = useState([]);

  const getDragons = useMemo(() => {
    fetch("https://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon")
      .then((res) => res.json())
      .then((json) => {
        setDragons(alphabeticalOrder(json));
      });
  }, []);

  return (
    <DragonsContext.Provider
      value={{
        dragons,
        setDragons,
      }}
    >
      {children}
    </DragonsContext.Provider>
  );
};

export const useDragons = () => {
  const context = useContext(DragonsContext);

  if (!context)
    throw new Error("useDragons must be used within a DragonsContext.");

  const { dragons, setDragons } = context;

  return {
    dragons,
    setDragons,
  };
};

DragonsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
