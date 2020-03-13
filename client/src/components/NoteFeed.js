import React from 'react';
import Note from './Note';
import Query from '../utils/Query';

const NoteFeed = () => {
  const { data: notes, loading } = Query('http://localhost:5000/note');

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        notes.map((note, index) => {
          return <Note key={index} data={note} />;
        })
      )}
    </>
  );
};

export default NoteFeed;
