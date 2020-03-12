import React, { useState } from 'react';

import './Note.css';

// Current data layout:
// "_id":"5e695b9d0d79827ed44e8fe2","userID":1,"title":"first note","body":"This is our first note!",
// "created_date":"2020-03-11T21:43:57.190Z","modified_date":"2020-03-11T21:43:57.190Z","__v":0

const Note = data => {
  const [note] = useState(data.data);
  //   console.log('note:', note);
  return (
    <div className="note">
      <div className="note__title">Title: {note.title}</div>
      <div className="note__body">Note: {note.body}</div>
    </div>
  );
};

export default Note;
