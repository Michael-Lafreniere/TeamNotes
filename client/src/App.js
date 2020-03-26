import React from 'react';
import './App.css';

import NoteFeed from './components/NoteFeed';
import NewNote from './components/NewNote';

const Header = () => {
  return (
    <header>
      <h1 className="title">Team Notes</h1>
    </header>
  );
};

function App() {
  return (
    <div className="App">
      <Header />
      <NewNote />
      <NoteFeed />
    </div>
  );
}

export default App;
