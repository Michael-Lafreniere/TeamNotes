import React, { useState } from 'react';
import { QueryData } from '../utils/Query';

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

export default Comment;
