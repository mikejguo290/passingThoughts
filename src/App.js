import React, { useState } from 'react';
import { AddThoughtForm } from './AddThoughtForm';
import { Thought } from './Thought';
import { generateId, getNewExpirationTime } from './utilities';

// once you add a short thought, it disappears in fifteen seconds.
function App() {
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: 'This is a place for your passing thoughts.',
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ]);
  console.log(thoughts);
  const addThought = (thought) => {
    // function for adding thought to thoughts state array.
    setThoughts((prev) => [thought, ...prev])
  }

  const removeThought=(id)=>{
    // removeThought has to update state thoughts based on the id it receives as a callback function. 
    setThoughts((prev) => {
      return prev.filter((thought) => thought.id !== id);
    });
  }

  return (
    <div className="App">
      <header>
        <h1>Passing Thoughts</h1>
      </header>
      <main>
        <AddThoughtForm addThought={addThought}/>
        <ul className="thoughts">
          {thoughts.map((thought) => (
            <Thought key={thought.id} thought={thought} removeThought={removeThought}/>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
