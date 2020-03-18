import React, { useState } from 'react';

import './Note.css';
import './Comment.css';

const Comment = ({ data: comment }) => {
  return <div className="comment">{comment}</div>;
};

const Note = data => {
  const [note] = useState(data.data);
  // console.log('note:', note);

  let comments;
  if (note.comments !== undefined) {
    comments = note.comments.map((comment, index) => {
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
