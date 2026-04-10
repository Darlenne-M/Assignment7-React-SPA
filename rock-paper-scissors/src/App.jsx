import { useState } from "react";
import PlayerThrow from './PlayerThrow';
import ComputerThrow from './ComputerThrow';
import Results from "./ResultDisplay";
import './App.css'
import './style.css';

function App() {
  const [playerThrow, setPlayerThrow] = useState(null);
  const [computerThrow, setComputerThrow] = useState(null);
  const [trigger, setTrigger] = useState(false);
  const [thinking, setThinking] = useState(false);

  function handleClick(choice) {
    setPlayerThrow(choice);
    setTrigger(true);
    setThinking(true);
    console.log("Player throw: ", choice);

    // reset trigger
    setTimeout(() => {
      setTrigger(false);
    }, 0);
  }

  function handleComputerChoice(choice) {
    setComputerThrow(choice);
    console.log("Computer throw: ", choice);
  }




  return (
    <>
      <header className="title">
        <h1>ROCK PAPER SCISSORS GAME. GO!</h1>
      </header>

      <PlayerThrow handleClick={handleClick} />
      <ComputerThrow trigger={trigger} onComputerChoice={handleComputerChoice} setThinking={setThinking} />
      <Results playerThrow={playerThrow} computerThrow={computerThrow} thinking={thinking} />
    </>

  )
}

export default App
