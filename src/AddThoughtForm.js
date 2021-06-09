import React, {useState} from 'react';
import { generateId, getNewExpirationTime } from './utilities';

export function AddThoughtForm(props) {
  // AddThoughtForm requires state to record user input and be able to pass it on as thought to addThought() call
  // thought is if a function is passed to component, where is that component expected to get that data? should it store it itself?
  const [text, setText ] = useState('');

  const handleTextChange = (e) =>{
    // whenever user inputs a value, this function gets called to update state text, which also updates the value of the input box explicitly.
    const input = e.target.value;
    setText(input);
  }

  return (
    <form className="AddThoughtForm">
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={text}
        onChange={handleTextChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
}
