import styled from "styled-components";
import { useState } from "react";

type EndInfoProps = {
  resetGame: () => void;
};

const EndInfo = ({ resetGame }: EndInfoProps) => {
  const [isFinished, setIsFinished] = useState(false);
  return (
    <EndGameContainer>
      {isFinished ? (
        <p>Thanks for playing!</p>
      ) : (
        <>
          <h2>Good Job!</h2>
          <p>You found all of the matching cards!</p>
          <p>Would you like to play again?</p>
          <EndGameButtonContainer>
            <EndGameButtonYes onClick={resetGame}>Yes</EndGameButtonYes>
            <EndGameButtonNo onClick={() => setIsFinished(true)}>
              No
            </EndGameButtonNo>
          </EndGameButtonContainer>
        </>
      )}
    </EndGameContainer>
  );
};

const EndGameContainer = styled.section`
  margin-top: auto;
  text-align: center;
  font-size: 32px;
`;

const EndGameButtonContainer = styled.div`
  width: 70%;
  margin: 3rem auto 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const EndGameButtonYes = styled.button`
  width: 50%;
  border-radius: 1rem;
  border: 2px solid black;
  font-size: 1.5rem;
  padding-block: 0.5rem;
  cursor: pointer;
  background-color: #COCOCO;
`;
const EndGameButtonNo = styled.button`
  width: 50%;
  border-radius: 1rem;
  border: 2px solid black;
  font-size: 1.2rem;
  padding-block: 0.5rem;
  cursor: pointer;
  background-color: #COCOCO;
`;

export default EndInfo;