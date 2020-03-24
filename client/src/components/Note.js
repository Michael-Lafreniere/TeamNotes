import React, { useState, useEffect } from 'react';
// import Query from '../utils/Query';

import './Note.css';
import './Comment.css';

const Comment = ({ data: comment }) => {
  return <div className="comment">{comment}</div>;
};

function QueryComments(noteID) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('http://localhost:5000/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ noteID: noteID })
      })
        .then(res => res.json())
        .catch(error => setError(error));
      setData(data);
      setLoading(false);
    };
    fetchData();
  }, [noteID]);

  return { data, loading, error };
}

const Note = noteData => {
  const [note] = useState(noteData.data);
  const data = QueryComments(note._id);

  // console.table('data:', data.data);

  let comments;
  if (data !== undefined && data.data !== undefined) {
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
