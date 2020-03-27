import React, { useState } from 'react';
import './App.css';

import Header from './components/Header';
import NoteFeed from './components/NoteFeed';
import NewNote from './components/NewNote';

import { LoginContext } from './utils/Context';

function App() {
  const [user] = useState({ userID: '5e6820791c9d44000064761d' });

  return (
    <LoginContext.Provider value={{ user }}>
      <div className="App">
        <Header />
        <NewNote />
        <NoteFeed />
      </div>
    </LoginContext.Provider>
  );
}

export default App;
