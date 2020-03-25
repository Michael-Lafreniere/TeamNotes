import React, { useState } from 'react';
import { QueryData } from '../utils/Query';

import './Note.css';
import './Comment.css';

const Comment = ({ data: comment, user }) => {
  const { data: name, loading } = QueryData('username', user);
  return (
    <div className="comment-parent">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="comment">
          {comment}&nbsp;<div className="comment-name">{name}</div>
        </div>
      )}
    </div>
  );
};

const Note = noteData => {
  const [note] = useState(noteData.data);
  const data = QueryData('comments', note._id);

  let comments;
  if (data !== undefined && data.data !== undefined) {
    // console.table(data.data);
    comments = data.data.map((comment, index) => {
      return (
        <Comment key={index} data={comment.comment} user={comment.userID} />
      );
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
