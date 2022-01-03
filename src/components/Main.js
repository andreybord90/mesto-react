import React from "react";
import { useEffect, useState } from "react";
import api from "../utils/api";
import Card from "./Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCards()])
      .then(([dataProfile, dataUser]) => {
        setUserName(dataProfile.name);
        setUserDescription(dataProfile.about);
        setUserAvatar(dataProfile.avatar);
        setCards(dataUser);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main>
      <section className="profile">
        <button
          className="profile__edit-avatar"
          type="button"
          aria-label="кнопка редактирования аватара"
          onClick={onEditAvatar}
        >
          <img className="profile__avatar" alt="Аватар" src={userAvatar} />
        </button>
        <div className="profile__info">
          <div className="profile__wrapper">
            <h1 className="profile__name">{userName}</h1>
            <button
              className="profile__button"
              type="button"
              aria-label="кнопка редактировать профиль"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__job">{userDescription}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="кнопка добавить контент"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="elements">
        {cards.map((card) => {
          return <Card key={card._id} card={card} onCardClick={onCardClick} />;
        })}
      </section>
    </main>
  );
}

export default Main;
