import React, { useState } from 'react';
import Comment from './Comment';
import { QueryData } from '../utils/Query';

import './Note.css';

const Note = noteData => {
  const [note] = useState(noteData.data);
  const data = QueryData('comments', note._id);
  const { data: name } = QueryData('username', note.userID);

  let comments;
  if (data !== undefined && data.data !== undefined) {
    comments = data.data.map((comment, index) => {
      return (
        <Comment key={index} data={comment.comment} user={comment.userID} />
      );
    });
  }

  return (
    <div className="note">
      <div className="note__title">{note.title}</div>
      <div className="note__body">
        {note.body}
        <div className="note__by">{name}</div>
      </div>
      {comments ? comments : null}
    </div>
  );
};

export default Note;
