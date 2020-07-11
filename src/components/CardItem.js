import React, { useState } from "react";

//Media
import CardCover from "../media/CardCover.JPG";

//Components
import { CoverCard } from "../styles";

//Function
const CardItem = (props) => {
  const card = props.card;
  const [currentImage, setCurrentImage] = useState(false);
  const handleClick = () => {
    props.flipCard(card.id);
    setCurrentImage(currentImage === false ? true : false);
  };

  return (
    <div className="col-4">
      <CoverCard
        onClick={handleClick}
        src={!card.clicked ? CardCover : card.image}
        alt={card.name}
      />
    </div>
  );
};

export default CardItem;
