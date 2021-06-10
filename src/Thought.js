import React from 'react';

export function Thought(props) {
  // Thought expects props thought and removeThought, here helpfully destructured from props object. 
  const { thought, removeThought } = props;

  const handleRemoveClick = () => {
    // pass thought.id up to App to affect its's thoughts state
    removeThought(thought.id);
  };

  return (
    <li className="Thought">
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleRemoveClick}
      >
        &times;
      </button>
      <div className="text">{thought.text}</div>
    </li>
  );
}
