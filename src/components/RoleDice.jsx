import styled from "styled-components"

const DiceContainer = styled.div`
    display: flex;
    margin-top: 30px;
    flex-direction: column;
    align-items: center;
    p{
        font-size: 20px;
    }
    .dice{
        cursor: pointer;
    }
`;

const RoleDice = ({currentDice, rollDice}) => {
  return (
    <DiceContainer>
    <div className="dice" onClick={rollDice}> 
      <img src={`/images/dice/dice_${currentDice}.png`} alt={`dice${currentDice}`} />
    </div>
    <p>
        Click on Dice to roll
    </p>
    </DiceContainer>
  )
}

export default RoleDice
