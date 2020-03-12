import React, { useEffect, useState } from 'react';
import Note from './Note';

const NoteFeed = () => {
  const [notes, setNotes] = useState(null);

  useEffect(() => {
    const fetchNotes = async () => {
      fetch('http://localhost:5000/note')
        .then(response => response.json())
        .then(data => setNotes(data))
        .catch(error => console.log(error));
    };

    fetchNotes();
  }, []);

  return (
    <>
      {notes === null
        ? null
        : notes.map((note, index) => {
            return <Note key={index} data={note} />;
          })}
    </>
  );
};

export default NoteFeed;
