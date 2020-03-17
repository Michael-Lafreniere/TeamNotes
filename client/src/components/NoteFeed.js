import React from 'react';
import Note from './Note';
import Query from '../utils/Query';

import './NoteFeed.css';

const NoteFeed = () => {
  const { data: notes, loading } = Query('http://localhost:5000/note');

  return (
    <div className="notefeed">
      {loading ? (
        <p>Loading...</p>
      ) : (
        notes.map((note, index) => {
          return <Note key={index} data={note} />;
        })
      )}
    </div>
  );
};

export default NoteFeed;
