import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './routes';
import store from './store';

import GlobalStyle from './styles/global';

import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
