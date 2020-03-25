import React from 'react';
import './App.css';

import './components/NoteFeed';
import NoteFeed from './components/NoteFeed';

const NewNote = () => {
  return (
    <div className="new-note">
      <input placeholder="New note title" />
      <textarea rows="5" placeholder="Start a new note here" />
      <button>Submit</button>
    </div>
  );
};

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
