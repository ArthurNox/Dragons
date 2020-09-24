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

  p {
    color: #FFFFFF;
    text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
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
  .edit-icon {
    color: #FFFFFF;
    cursor: pointer;
  }
  .edited-icon {
    color: #FF0000;
    cursor: pointer;
  }
`