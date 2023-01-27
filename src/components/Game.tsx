import cards from "../libs/Cards";
import CardGrid from "./CardGrid";
import PlayerInfo from "./PlayerInfo";
import { useEffect, useState } from "react";
import styled from "styled-components";
import EndInfo from "./EndInfo";

export interface CardObj {
  id: number;
  name: string;
  image: string;
  flipped: boolean;
  found: boolean;
}

const Game = (): JSX.Element => {
  const [randomCards, setRandomCards] = useState<CardObj[] | null>(null);
  const [score, setScore] = useState<number>(0);
  const [turns, setTurns] = useState<number>(0);
  const [selectedCards, setSelectedCards] = useState<CardObj[]>([]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [gameFinished, setGameFinished] = useState<boolean>(false);
  let pairsToFind = 8;

  const randomiseCards = () => {
    let randomOrderArr = [];
    let cardsArr = cards;
    for (let i = cardsArr.length; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * i);
      randomOrderArr.push(cardsArr[randomIndex]);
      cardsArr = [
        ...cardsArr.slice(0, randomIndex),
        ...cardsArr.slice(randomIndex + 1),
      ];
    }
    return randomOrderArr;
  };

  if (!randomCards) {
    const newState = randomiseCards();
    setRandomCards(newState);
  }
  useEffect(() => {
    if (score === pairsToFind) {
      setTimeout(() => {
        setGameFinished(true);
        setRandomCards(null);
      }, 1000);

    }
  }, [score]);

  useEffect(() => {
    if (selectedCards.length === 2) {
      if (randomCards) {
        setTurns(turns + 1);
        let newState: CardObj[] = [];
        if (selectedCards[0].name === selectedCards[1].name) {
          setScore(score + 1);
          newState = randomCards.map((card) => {
            if (card.name === selectedCards[0].name) {
              return { ...card, found: true, flipped: false };
            }
            return card;
          });
        } else {
          newState = randomCards.map((card) => {
            if (
              card.name === selectedCards[0].name ||
              card.name === selectedCards[1].name
            ) {
              return { ...card, flipped: false };
            }
            return card;
          });
        }
        setTimeout(() => {
          setRandomCards(newState);
          setSelectedCards([]);
        }, 1500);
      }
    }
  }, [selectedCards]);

  const handleClick = (cardIndex: number, card: CardObj) => {
    if (isPlaying) {
      if (selectedCards.length < 2) {
        setFlippedStatus(cardIndex);
        updateSelectedCards(card);
      } else {
      }
    }
  };

  const setFlippedStatus = (cardIndex: number) => {
    if (randomCards) {
      if (
        randomCards[cardIndex].flipped === true ||
        randomCards[cardIndex].found === true
      ) {
        return;
      }
      const newState = randomCards.map((card, index) => {
        if (index === cardIndex) {
          return { ...card, flipped: true };
        }
        return card;
      });
      setRandomCards(newState);
    }
  };

  const updateSelectedCards = (card: CardObj) => {
    if (card.flipped === true) {
      return;
    }
    if (card.found === true) {
      return;
    }
    setSelectedCards([...selectedCards, card]);
  };

  const resetGame = () => {
    setScore(0);
    setTurns(0);
    setSelectedCards([]);
    setGameFinished(false);
    const newState = randomiseCards();
    setRandomCards(newState);
    setIsPlaying(false);
  };

  const startGame = () => {
    const newState = randomiseCards();
    setRandomCards(newState);
    setIsPlaying(true);
  };

  return (
    <GameContainer>
      {gameFinished ? (
        <EndInfo resetGame={resetGame} />
      ) : isPlaying ? (
        <CardGrid randomCards={randomCards} handleClick={handleClick} />
      ) : (
        <StartContainer>
          <p>Press Start to play!</p>
          <StartButton onClick={startGame}>Start</StartButton>
        </StartContainer>
      )}
      <PlayerInfo turns={turns} score={score} />
    </GameContainer>
  );
};

const GameContainer = styled.main`
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 750px;
  border: 1px solid black;
  padding: 1rem;
  background-color: #E8E8E8;
`;

const StartContainer = styled.div`
  text-align: center;
  margin-top: auto;
  font-size: 2rem;
`;

const StartButton = styled.button`
  width: 80%;
  border-radius: 1rem;
  border: none;
  font-size: 1.5rem;
  padding-block: 0.5rem;
  cursor: pointer;
  background-color: #COCOCO;
`;

export default Game;