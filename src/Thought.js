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
    // useEffect to run whenever the props.thought changes, whenenver thoughts state changes, i.e. additions or deleitions, 
    // Thought will be passed updated props.thought and so the effect should be used on the updated thought props. targeting the right thought.id.
    // even though i haven't managed to break the app with an empty dependency array []

    // if any effect depends on props value, then it should be ran on each update re render. as well as on mount.
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
