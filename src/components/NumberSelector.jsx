import styled from "styled-components";

const Box = styled.div`
  height: 52px;
  width: 52px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => props.isSelected ? "black" : "white"};
  color: ${(props) => !props.isSelected ? "black" : "white"};
  cursor: pointer;
`;

const NumberSelectorContainer = styled.div`
display: flex;
flex-direction: column;
align-items: end;
.flex{
    display: flex;
    gap: 24px;
}

p{
    font-size: 20px;
    font-weight: 700;
}

.error{
    color: red;
    margin-bottom: 15px;
    font-weight: 500;
}

`;

const NumberSelector = ({setError, error, selectedNumber,setSelectedNumber}) => {

    const arrayNum = [1, 2, 3, 4, 5, 6];

    const selecteNumberHandler = (value) => {
        setSelectedNumber(value)
        setError("");
    }

  return (
    <NumberSelectorContainer>
        <p className="error">{error}</p>
    <div className="flex">
      {arrayNum.map((value, i) => (
        <Box isSelected = {value === selectedNumber} key={i} onClick={() => selecteNumberHandler(value)}>{value}</Box>
      ))}
    </div>
    <p>
        Selected Number
    </p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;
