import React, { useContext, useReducer } from 'react';
import { LoginContext } from '../utils/Context';

import './NewNote.css';

const initalState = {
  title: '',
  body: ''
};

const postNote = (user, title, body) => {
  console.log(user, title, body);
};

const newNoteReducer = (state, action) => {
  switch (action.type) {
    case 'title':
      return { ...state, title: action.title };
    case 'body':
      return { ...state, body: action.value };
    case 'send':
      if (action.user !== undefined && action.title.length > 0) {
        postNote(action.user, action.title, action.boly);
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

  return (
    <div className="new-note">
      <div className="new-note-group">
        <input
          ref={titleRef}
          placeholder="New note title"
          value={state.title}
          onChange={event => {
            dispatch({ type: 'title', title: titleRef.current.value });
          }}
        />
        <textarea
          ref={bodyRef}
          rows="5"
          placeholder="Start a new note here"
          value={state.body}
          onChange={event => {
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
