import styled from 'styled-components';

export const Container = styled.header`
  height: 80px;
  background-color: #05668D;
  color: #fff;
  font-weight: bold;
  font-size: 30px;
  padding: 1rem 2rem;
  margin-bottom: 0.5rem;


  display:flex;
  justify-content: center;
  justify-content: space-between;
  
  box-shadow: 2px 2px 4px #000;

  .logout {
    cursor: pointer;
  }

  svg {
    fill:#FFFFFF;
  }

  p {
    text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
  }
`
