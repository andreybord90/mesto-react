import React from "react";
import { useEffect } from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  //Запрос данных с сервера

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCards()])
      .then(([dataProfile, dataUser]) => {
        setCurrentUser(dataProfile);
        setCards(dataUser);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //функция обновления данных User

  const handleUpdateUser = ({ name, about }) => {
    api
      .changeUserInfo({ name, about })
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //функция обновления данных avatar

  const handleUpdateAvatar = ({ avatar }) => {
    api
      .updateUserAvatar(avatar)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Обработчики кликов
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

  //Добавление карточки
  const handleAddPlaceSubmit = (data) => {
    api
      .insertCard(data)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //лайк на карточке
  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Удаление карточки
  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //стейты
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  //Закртыие попапов
  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  };

  //хук закрытия
  const useClosePopupByEscape = (isOpen) => {
    const closeByEsc = (e) => {
      if (e.key === "Escape") {
        closeAllPopups();
      }
    };
    useEffect(() => {
      if (isOpen) {
        document.addEventListener("keydown", closeByEsc);
        return () => document.removeEventListener("keydown", closeByEsc);
      }
    }, [isOpen]);
  };
  const useClosePopup = (
    overlayClassName,
    closeButtonClassName,
    onClose,
    isOpen
  ) => {
    const handleClose = (e) => {
      if (
        e.target.classList.contains(overlayClassName /*"popup_opened"*/) ||
        e.target.classList.contains(closeButtonClassName /*"popup__exit"*/)
      ) {
        onClose();
      }
    };
    useEffect(() => {
      if (isOpen) {
        document.addEventListener("click", handleClose);
        return (e) => {
          document.removeEventListener("click", handleClose);
        };
      }
    }, [isOpen]);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="wrapper">
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            cards={cards}
          />
          <Footer />
        </div>
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          useClosePopup={useClosePopup}
          useClosePopupByEscape={useClosePopupByEscape}
          onUpdateUser={handleUpdateUser}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          useClosePopup={useClosePopup}
          useClosePopupByEscape={useClosePopupByEscape}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          useClosePopup={useClosePopup}
          useClosePopupByEscape={useClosePopupByEscape}
          onAddPlace={handleAddPlaceSubmit}
        />

        {/* <PopupWithForm
            name="submit"
            title="Вы уверены"
            isOpen={isRemovePlacePopupOpen}
            onClose={closeAllPopups}
            useClosePopup={useClosePopup}
            useClosePopupByEscape={useClosePopupByEscape}
          >
            <button
              className="popup__button popup__button_type_submit"
              type="submit"
              aria-label="кнопка Удаление"
            >
              Да
            </button>
          </PopupWithForm> */}
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
          useClosePopup={useClosePopup}
          useClosePopupByEscape={useClosePopupByEscape}
          isOpen={Boolean(Object.keys(selectedCard).length)}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
