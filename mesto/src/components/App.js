import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { useClosePopupByEscape } from "../utils/utils";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({ name: "", link: "" });
  };
  useClosePopupByEscape(closeAllPopups);

  return (
    <div className="page">
      <div className="wrapper">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>
      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          className="popup__text popup__text_type_name"
          name="name"
          placeholder="Имя"
          required
          minLength="2"
          maxLength="40"
          autoComplete="off"
          id="name"
        />
        <span className="popup__text-error" id="name-error"></span>
        <input
          type="text"
          className="popup__text popup__text_type_job"
          name="about"
          placeholder="Профессиональная деятельность"
          required
          minLength="2"
          maxLength="40"
          autoComplete="off"
          id="job"
        />
        <span className="popup__text-error" id="job-error"></span>
        <button
          className="popup__button"
          type="submit"
          aria-label="кнопка сохранить"
        >
          Сохранить
        </button>
      </PopupWithForm>
      <PopupWithForm
        name="add"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          className="popup__text popup__text_type_sign"
          name="name"
          placeholder="Название"
          required
          minLength="2"
          maxLength="30"
          id="sign"
          autoComplete="off"
        />
        <span className="popup__text-error" id="sign-error"></span>
        <input
          autoComplete="off"
          type="url"
          className="popup__text popup__text_type_url"
          name="link"
          placeholder="Ссылка на картинку"
          required
          id="url"
        />
        <span className="popup__text-error" id="url-error"></span>
        <button
          className="popup__button popup__button_type_add"
          type="submit"
          aria-label="кнопка создать"
        >
          Создать
        </button>
      </PopupWithForm>{" "}
      <PopupWithForm name="submit" title="Вы уверены" onClose={closeAllPopups}>
        <button
          className="popup__button popup__button_type_submit"
          type="submit"
          aria-label="кнопка Удаление"
        >
          Да
        </button>
      </PopupWithForm>
      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="url"
          className="popup__text popup__text_type_avatar"
          name="avatar"
          required
          minLength="2"
          autoComplete="off"
          id="avatar"
          placeholder="Ссылка на аватар"
        />
        <span className="popup__text-error" id="avatar-error"></span>
        <button
          className="popup__button popup__button_type_avatar"
          type="submit"
          aria-label="кнопка Сохранить"
        >
          Сохранить
        </button>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
