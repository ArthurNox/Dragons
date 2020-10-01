import styled from "styled-components";

export const Container = styled.section`
  width: fit-content;
  height: auto;
  background: #00a896;
  margin-bottom: 20px;
  border-radius: 25px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-shadow: 2px 2px 4px #000;
  cursor: pointer;

  img {
    width: fit-content;
    padding: 1rem 0.5rem;
  }

  h1,
  p {
    color: #ffffff;
    text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
    padding-bottom: 1rem;
  }
`;
