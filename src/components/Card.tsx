import styled from "styled-components";
import { CardObj } from "./Game";

type CardProps = {
  flippedImage: string;

  card: CardObj;
  cardIndex: number;
  handleClick: (cardIndex: number, card: CardObj) => void;
};

type CardFlippedImgProps = {
  found?: boolean;
};

const Card = ({
  flippedImage,
  handleClick,

  card,
  cardIndex,
}: CardProps): JSX.Element => {
  return (
    <CardContainer
      onClick={() => {
        handleClick(cardIndex, card);
      }}
    found={card.found ? true : false}  
    >
      {card.flipped || card.found ? (
        <CardFlippedImage src={flippedImage} alt="Alt text" />
      ) : (
        <CardImage src="/react-project2/images/card-back.png" alt="Alt text" />
      )}
    </CardContainer>
  );
};

const CardContainer = styled.div<CardFlippedImgProps>`
  box-sizing: border-box;
  border: ${(props) =>
    props.found
      ? "4px inset white"
      : "1px inset black"};
  border-radius: 0.5rem;
  width: min(10vw, 8rem);
  height: min(15vw, 10rem);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0;
  background-color: white;
`;
const CardImage = styled.img`
  width: 75%;
  height: 75%;
  border-radius: 0.4rem;
`;
const CardFlippedImage = styled.img`
  width: 50%;
  height: 50%;
  border-radius: 0.4rem;
`;
export default Card;