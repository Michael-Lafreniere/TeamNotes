import React from 'react';
import './App.css';

import './components/NoteFeed';
import NoteFeed from './components/NoteFeed';

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="title">Team Notes</h1>
      </header>
      <NoteFeed />
    </div>
  );
}

export default App;
