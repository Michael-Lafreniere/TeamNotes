import React from 'react';
import './App.css';

// import './components/NoteFeed';
import NoteFeed from './components/NoteFeed';
import NewNote from './components/NewNote';

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="title">Team Notes</h1>
      </header>
      <NewNote />
      <NoteFeed />
    </div>
  );
}

export default App;
