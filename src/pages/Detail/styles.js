import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 2rem 3rem;
  border-radius: 25px;
  background-color: #00a896;

  img {
    width: fit-content;
    margin: 2rem;
  }

  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    margin:1rem;

  }
  .hidden { 
    display:none; 
    }
  
  .update-icon {
    color: green;
    cursor: pointer;
    
  }

  .delete-icon {
    color: red;
    cursor: pointer;
  }

  .edited-icon {
    color: black;
    cursor: pointer;
  }
  .edit-icon {
    color: red;
    cursor: pointer;
  }

  /* .edit-content {
    position: fixed;
    bottom: 0px;
    right: 0px; 
  } */
`