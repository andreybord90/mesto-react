import React from "react";

function Card({ card, handleCardClick }) {
  function handleClick() {
    handleCardClick(card);
  }

  return (
    <>
      <div className="element">
        <button className="element__delete" type="button"></button>
        <img
          className="element__image"
          src={card.link}
          alt={card.name}
          onClick={handleClick}
        />
        <div className="element__info">
          <h2 className="element__name">{card.name}</h2>
          <div className="element__wrapper-like">
            <button className="element__like" type="button"></button>
            <p className="element__count-like">{card.likes?.length}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
