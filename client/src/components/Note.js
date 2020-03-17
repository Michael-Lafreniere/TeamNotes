import React, { useState } from 'react';

import './Note.css';
import './Comment.css';

// Current data layout:
// "_id": "5e695b9d0d79827ed44e8fe2", "userID": 1, "title": "first note", "body": "This is our first note!",
// "created_date": "2020-03-11T21:43:57.190Z", "modified_date": "2020-03-11T21:43:57.190Z", "__v": 0

const Comment = ({ data: comment }) => {
  return <div className="comment">{comment}</div>;
};

const Note = data => {
  const [note] = useState(data.data);
  // console.log('note:', note);

  const comments = note.comments.map((comment, index) => {
    return <Comment key={index} data={comment.comment} />;
  });

  return (
    <div className="note">
      <div className="note__title">{note.title}</div>
      <div className="note__body">{note.body}</div>
      {comments ? comments : null}
    </div>
  );
};

export default Note;
