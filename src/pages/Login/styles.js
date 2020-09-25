import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .login__logo {
    max-width: 100%;
  }

  .fail input{
    border: 2px solid red;
    border-radius: 4px;
  }

  form {
    width: 40%;
    border-radius: 25px;
    background-color: #00a896;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  button {
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
    margin: 1rem 2rem;
  }

  input{
    margin-bottom: 0.5rem;
  }

  h1{
    color: #FFFFFF;
    margin-bottom: 0.5rem;
    text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
  }
`