import React, { useState } from "react";

//Component
import CardItem from "./CardItem";
import { Card } from "../styles";

//Data
import cards from "../cards";
let twoCards = [];
const CardList = () => {
  const [_cards, setCard] = useState(cards);
  const flipCard = (cardId) => {
    const updateCard = _cards.find((card) => card.id === cardId);
    updateCard.clicked = true;
    setCard([..._cards]);
    twoCards.push(updateCard);

    if (twoCards.length === 2) {
      console.log("hi");

      if (twoCards[0].image === twoCards[1].image) {
        //If the cards are identical
        twoCards = [];
        console.log(twoCards, "hiiiii");
      } else {
        //If the cards are not identical
        console.log(twoCards, "hiiiii");
        updateCard.clicked = false;
        const _updateCard = _cards.find((card) => card.id === twoCards[0].id);
        _updateCard.clicked = false;
        setCard([..._cards]);
      }
    }
  };

  const cardList = _cards.map((card) => (
    <Card>
      <CardItem card={card} flipCard={flipCard} key={card.id} />
    </Card>
  ));

  return (
    <div className="container">
      <div className="row justify-content-center">{cardList}</div>
    </div>
  );
};
/*</ListWrapper>*/

export default CardList;
