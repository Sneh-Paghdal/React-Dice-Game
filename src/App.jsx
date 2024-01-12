import { useState } from "react";
import styled from "styled-components";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggelGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return(
     <>
     {isGameStarted ? <GamePlay /> : <StartGame
     toggel={toggelGamePlay}
     />}
     </>
  );
}

export default App;
