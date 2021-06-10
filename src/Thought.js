import React, { useEffect } from 'react';

export function Thought(props) {
  // Thought expects props thought and removeThought, here helpfully destructured from props object. 
  const { thought, removeThought } = props;

  const handleRemoveClick = () => {
    // pass thought.id up to App to affect its's thoughts state
    removeThought(thought.id);
  };

  useEffect(()=>{
    // setTimeOut sets a timer which executes a piece of code once the timer expires.
    // useEffect to run whenever the props.thought changes, can't see how it might change however? if thought was removed, wouldn't the component simply unmount?
    // for each thoughts re rendering caused by change to thoughts in app's state, the thought passed down wouldn't be able to change. 
    // maybe it's just good practice? 
    // eslint says React Hook useEffect has a missing dependency:removeThought! why? 
    const timeRemaining = thought.expiresAt - Date.now(); // more accurate than passing 15*1000 as second arg to setTimeOut()
    const timeoutID = setTimeout(()=>{ removeThought(thought.id) }, timeRemaining);
    return ()=> { clearTimeout(timeoutID)}
  },[thought]);


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
