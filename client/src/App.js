import React from 'react';
import './App.css';

import Header from './components/Header';
import NoteFeed from './components/NoteFeed';
import NewNote from './components/NewNote';

import { LoginContext } from './utils/Context';

function App() {
  return (
    <LoginContext.Provider>
      <div className="App">
        <Header />
        <NewNote />
        <NoteFeed />
      </div>
    </LoginContext.Provider>
  );
}

export default App;
