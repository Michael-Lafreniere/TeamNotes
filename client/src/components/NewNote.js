import React from 'react';

import './NewNote.css';

const NewNote = () => {
  return (
    <div className="new-note">
      <input placeholder="New note title" />
      <textarea rows="5" placeholder="Start a new note here" />
      <button>Submit</button>
    </div>
  );
};

export default NewNote;
