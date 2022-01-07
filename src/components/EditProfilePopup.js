import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({
  isOpen,
  onClose,
  useClosePopup,
  useClosePopupByEscape,
  onUpdateUser,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState("");
  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const [description, setDescription] = React.useState("");
  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  };
  return (
    <>
      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        isOpen={isOpen}
        onClose={onClose}
        useClosePopup={useClosePopup}
        useClosePopupByEscape={useClosePopupByEscape}
        onSubmit={handleSubmit}
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
          value={name || ""}
          onChange={handleChangeName}
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
          value={description || ""}
          onChange={handleChangeDescription}
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
    </>
  );
}

export default EditProfilePopup;
