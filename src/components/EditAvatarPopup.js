import React from "react";
import PopupWithForm from "./PopupWithForm";
// import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditAvatarPopup({
  isOpen,
  onClose,
  useClosePopup,
  useClosePopupByEscape,
  onUpdateAvatar,
}) {
  const avatarRef = React.useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  };

  React.useEffect(() => {
    if (!isOpen) {
      avatarRef.current.value = "";
    }
  }, [isOpen]);
  return (
    <>
      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        isOpen={isOpen}
        onClose={onClose}
        useClosePopup={useClosePopup}
        useClosePopupByEscape={useClosePopupByEscape}
        onSubmit={handleSubmit}
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
          ref={avatarRef}
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
    </>
  );
}

export default EditAvatarPopup;
