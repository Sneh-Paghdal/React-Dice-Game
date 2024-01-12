import React from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RoleDice from "./RoleDice";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const MainContainer = styled.div`
  padding-top: 50px;
  .top_section {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    width: 90vw;
    align-items: center;
  }
  .btns {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 40px;
  }
`;

const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = React.useState();
  const [currentDice, setCurrentDice] = React.useState(1);
  const [score, setScore] = React.useState(0);
  const [error, setError] = React.useState("");
  const [isShowRule, setShowRule] = React.useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    const randomNumber = generateRandomNumber(1, 7);

    if (!selectedNumber) {
      setError("Please select any number below");
      return;
    }
    setCurrentDice(() => randomNumber);

    if (selectedNumber == randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    // setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          setError={setError}
          error={error}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice currentDice={currentDice} rollDice={rollDice} />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button onClick={() => setShowRule((prev) => !prev)}>
          {isShowRule ? "hide" : "Show"} rules
        </Button>
        {isShowRule && <Rules />}
      </div>
    </MainContainer>
  );
};

export default GamePlay;
