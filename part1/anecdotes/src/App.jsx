import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(8).fill(0));
  const [mostVotes, setMostVotes] = useState(0);

  const handleRandomAnecdote = () => {
    const randomAnecdote = Math.floor(Math.random() * (7 - 0) + 0);
    setSelected(randomAnecdote);
  };

  const handleVotes = () => {
    const newVotes = [...votes];
    newVotes[selected] = newVotes[selected] + 1;
    const maxVotes = Math.max(...newVotes);
    setMostVotes(Math.max(newVotes.indexOf(maxVotes)));
    setVotes(newVotes);
  };

  return (
    <div>
      <h1>Anecdote of a day</h1>
      <p>
        {anecdotes[selected]} has {votes[selected]} votes
      </p>
      <button onClick={handleVotes}>vote</button>
      <button onClick={handleRandomAnecdote}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>
        {anecdotes[mostVotes]} has {votes[mostVotes]} votes
      </p>
    </div>
  );
};

export default App;
