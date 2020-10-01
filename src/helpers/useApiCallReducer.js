import { useReducer } from "react";

const base_URL = "https://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/";

const redirection = (res) => {
  console.log(res.status);
  if (res.status === 200 || res.status === 201) {
    window.location.href = "/home";
  }
};

const initialState = {
  status: "Error",
};

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      fetch(base_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: action.payload.name,
          type: action.payload.type,
        }),
      }).then((json) => {
        redirection(json);
      });
      break;
    case "UPDATE":
      fetch(`${base_URL}${action.payload.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: action.payload.name,
          type: action.payload.type,
        }),
      }).then((json) => {
        redirection(json);
      });
      break;
    case "DELETE":
      fetch(`${base_URL}${action.payload.id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }).then((json) => {
        redirection(json);
      });
      break;
    default:
      return state;
  }
}

export function useApiCallReducer() {
  return useReducer(reducer, initialState);
}
