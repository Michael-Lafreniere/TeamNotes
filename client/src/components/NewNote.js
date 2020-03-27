import React, { useContext, useReducer } from 'react';
import { LoginContext } from '../utils/Context';

import './NewNote.css';

const initalState = {
  title: '',
  body: ''
};

const newNoteReducer = (state, action) => {
  switch (action.type) {
    case 'title':
      return { ...state, title: action.value };
    case 'body':
      return { ...state, body: action.value };
    case 'send':
      if (action.user !== undefined) {
      }
      return { state };
    default:
      return state;
  }
};

const NewNote = () => {
  const { user } = useContext(LoginContext);
  const [state, dispatch] = useReducer(newNoteReducer, initalState);
  const titleRef = React.createRef();
  const bodyRef = React.createRef();
  const { title, body } = state;

  return (
    <div className="new-note">
      <div className="new-note-group">
        <input
          ref={titleRef}
          placeholder="New note title"
          value={title}
          onChange={() => {
            dispatch({ type: 'title', value: titleRef.current.value });
          }}
        />
        <textarea
          ref={bodyRef}
          rows="5"
          placeholder="Start a new note here"
          value={body}
          onChange={() => {
            dispatch({ type: 'body', value: bodyRef.current.value });
          }}
        />
        <button
          onClick={() => {
            dispatch({
              type: 'send',
              title: titleRef.current.value,
              body: bodyRef.current.value,
              user
            });
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default NewNote;
