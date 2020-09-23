import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import GlobalStyle from './styles/global.style';

import history from './services/history'
import Routes from './routes'

import { AppProvider } from './contexts';

function App() {
  return (
    <AppProvider> 
      <GlobalStyle />
      <BrowserRouter history={history}>
        <Routes />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
