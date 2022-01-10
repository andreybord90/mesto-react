import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({
  isOpen,
  onClose,
  useClosePopup,
  useClosePopupByEscape,
  onAddPlace,
}) {
  const [name, setName] = React.useState("");
  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const [link, setLink] = React.useState("");
  const handleChangeLink = (e) => {
    setLink(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddPlace({
      name,
      link,
    });
  };

  React.useEffect(() => {
    if (!isOpen) {
      setName("");
      setLink("");
    }
  }, [isOpen]);

  return (
    <>
      <PopupWithForm
        name="add"
        title="Новое место"
        isOpen={isOpen}
        onClose={onClose}
        useClosePopup={useClosePopup}
        useClosePopupByEscape={useClosePopupByEscape}
        onSubmit={handleSubmit}
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
          value={name || ""}
          onChange={handleChangeName}
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
          value={link || ""}
          onChange={handleChangeLink}
        />
        <span className="popup__text-error" id="url-error"></span>
        <button
          className="popup__button popup__button_type_add"
          type="submit"
          aria-label="кнопка создать"
        >
          Создать
        </button>
      </PopupWithForm>
    </>
  );
}

export default AddPlacePopup;
