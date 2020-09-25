import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 2rem 3rem;
  border-radius: 25px;
  background-color: #00a896;
  box-shadow: 2px 2px 4px #000;

  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin:1rem;
  }

  img {
    width: fit-content;
    margin: 0.5rem 0rem;
  }

  p {
    color: #FFFFFF;
    text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
  }

  button {
    margin: 1rem 2rem 0rem 2rem;
  }

  input {
    margin-bottom: 0.5rem;
  }

  .hidden { 
    display:none; 
    }
  .update-icon {
    background-color: #05668D;
    border: none;
    color: #ffffff;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 4px;
    text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
  }
  .delete-icon {
    background-color: #FF0000;
    border: none;
    color: #ffffff;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 4px;
    text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
  }
  .edit-icon {
    color: #FFFFFF;
    cursor: pointer;
  }
  .edited-icon {
    color: #FF0000;
    cursor: pointer;
  }
`