import React from 'react';
import './App.scss';
import Router from 'routes';
import Providers from 'context/Providers';

function App() {
  return (
    <Providers>
      <Router />
    </Providers>
  );
}

export default App;
