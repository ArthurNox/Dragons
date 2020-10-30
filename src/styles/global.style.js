import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box!important;
}

html, body, #root {
  height: 100vh;
  font-family: 'Charm', cursive;
}

body {
  background: #f0f3bd;
  font-family: Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
}

body, button, input {
  font: 16px sans-serif;
}

a {
  text-decoration: none;
}

ul  {
  list-style: none;
}

a
{ 
 text-decoration:none;
 color: #000;
} 

a:link 
{ 
 text-decoration:none; 
} 

button {
  cursor: pointer;
}

/* width */
::-webkit-scrollbar {
  width: 16px;
}

::-webkit-scrollbar-thumb {
  background: #05668d;
}

`;
