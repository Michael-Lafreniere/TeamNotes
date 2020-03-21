import React, { useState } from 'react';
import Query from '../utils/Query';

import './Note.css';
import './Comment.css';

const Comment = ({ data: comment }) => {
  return <div className="comment">{comment}</div>;
};

const Note = data => {
  const [note] = useState(data.data);
  const { data: noteComments } = Query(`http://localhost:5000/comment`, 'GET', {
    noteID: `${note._id}`
  });

  let comments;
  if (noteComments !== undefined) {
    comments = noteComments.map((comment, index) => {
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
