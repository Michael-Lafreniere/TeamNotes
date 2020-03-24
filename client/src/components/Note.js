import React, { useState } from 'react';
import { QueryComments } from '../utils/Query';

import './Note.css';
import './Comment.css';

const Comment = ({ data: comment }) => {
  // console.log('comment data:', comment);
  return <div className="comment">{comment}</div>;
};

const Note = noteData => {
  const [note] = useState(noteData.data);
  const data = QueryComments(note._id);

  let comments;
  if (data !== undefined && data.data !== undefined) {
    console.table(data.data);
    comments = data.data.map((comment, index) => {
      return <Comment key={index} data={comment.comment} />;
    });
  }

  return (
    <div className="note">
      <div className="note__title">{note.title}</div>
      <div className="note__body">{note.body}</div>
      {comments ? comments : null}
    </div>
  );
};

export default Note;
