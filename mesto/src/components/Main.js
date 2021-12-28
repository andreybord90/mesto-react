import PopupWithForm from "./PopupWithForm";

function Main() {
  const handleEditAvatarClick = () => {
    const popupAvatar = document.querySelector(".popup_type_avatar");

    const openPopupAvatar = new PopupWithForm({
      popup: popupAvatar,
      handleFormSubmit: (data) => {
        openPopupAvatar.loading(true);
        // api
        //   .updateUserAvatar(data)
        //   .then((data) => {
        //     userInfo.setAvatar(data);
        //     openPopupAvatar.close();
        //   })
        //   .catch((err) => console.log(err))
        //   .finally(() => openPopupAvatar.loading(false));
      },
    });

    openPopupAvatar.setEventListeners();
    openPopupAvatar.open();
    // avatarFormValidation.resetValidation();
  };
  const handleEditProfileClick = () => {
    const popupEdit = document.querySelector(".popup-type-edit");

    const openPopupEdit = new PopupWithForm({
      popup: popupEdit,
      handleFormSubmit: (data) => {
        openPopupEdit.loading(true);
      },
    });
    openPopupEdit.setEventListeners();
    openPopupEdit.open();
  };

  const handleAddPlaceClick = () => {
    const popupAdd = document.querySelector(".popup_type_add");
    const openPopupAdd = new PopupWithForm({
      //попап добавления карточки
      popup: popupAdd,
      handleFormSubmit: (inputValues) => {
        openPopupAdd.loading(true);
      },
    });
    openPopupAdd.setEventListeners();
    openPopupAdd.open();
  };

  return (
    <main>
      <section className="profile">
        <button
          className="profile__edit-avatar"
          type="button"
          aria-label="кнопка редактирования аватара"
          onClick={handleEditAvatarClick}
        >
          <img className="profile__avatar" alt="Аватар" />
        </button>
        <div className="profile__info">
          <div className="profile__wrapper">
            <h1 className="profile__name"></h1>
            <button
              className="profile__button"
              type="button"
              aria-label="кнопка редактировать профиль"
              onClick={handleEditProfileClick}
            ></button>
          </div>
          <p className="profile__job"></p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="кнопка добавить контент"
          onClick={handleAddPlaceClick}
        ></button>
      </section>
      <section className="elements">
        <template className="element__template">
          <div className="element">
            <button className="element__delete" type="button"></button>
            <img
              className="element__image"
              src="#"
              alt="Изображение достопримечательности"
            />
            <div className="element__info">
              <h2 className="element__name"></h2>
              <div className="element__wrapper-like">
                <button className="element__like" type="button"></button>
                <p className="element__count-like"></p>
              </div>
            </div>
          </div>
        </template>
      </section>
    </main>
  );
}

export default Main;
