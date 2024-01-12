import styled from "styled-components";
import { Button } from "../styled/Button";

const Container = styled.div`
  max-width: 90vw;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;
  justify-content: space-between;
  .content h1 {
    font-size: 96px;
    white-space: nowrap;
  }
  .content{
    display: flex;
    flex-direction: column;
    align-items: end;
  }
`;

const StartGame = ({toggel}) => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" alt="" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggel}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;
