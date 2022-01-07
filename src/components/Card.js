import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }
  function handleDeleteClick() {
    onCardDelete(card);
  }

  const isOwn = card.owner._id === currentUser._id;

  const cardDeleteButtonClassName = `${
    isOwn ? "element__delete" : "element__delete_none"
  }`;

  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `${
    !isLiked ? "element__like" : "element__like element__like_active"
  }`;

  return (
    <>
      <div className="element">
        <button
          className={cardDeleteButtonClassName}
          type="button"
          onClick={handleDeleteClick}
        ></button>
        <div className="element__image-container">
          <img
            className="element__image"
            src={card.link}
            alt={card.name}
            onClick={handleClick}
          />
        </div>
        <div className="element__info">
          <h2 className="element__name">{card.name}</h2>
          <div className="element__wrapper-like">
            <button
              className={cardLikeButtonClassName}
              type="button"
              onClick={handleLikeClick}
            ></button>
            <p className="element__count-like">{card.likes?.length}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
