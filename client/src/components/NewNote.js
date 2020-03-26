import React from 'react';

import './NewNote.css';

const NewNote = () => {
  return (
    <div className="new-note">
      <div className="new-note-group">
        <input placeholder="New note title" />
        <textarea rows="5" placeholder="Start a new note here" />
        <button>Submit</button>
      </div>
    </div>
  );
};

export default NewNote;
