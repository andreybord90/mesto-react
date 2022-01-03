import React from "react";
// import { useEffect } from "react";
// import { useClosePopup } from "../utils/utils";

function PopupWithForm({
  name,
  title,
  isOpen,
  onClose,
  children,
  useClosePopup,
}) {
  useClosePopup("popup_opened", "popup__exit", onClose, isOpen);

  return (
    <>
      <div
        className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""} `}
      >
        <div className="popup__container">
          <button
            className={`popup__exit popup__exit_type_${name}`}
            type="button"
          ></button>
          <form
            className={`popup__form popup__form_type_${name}`}
            name="popup__form"
            noValidate
          >
            <h2 className="popup__title"> {title}</h2>
            {children}
          </form>
        </div>
      </div>
    </>
  );
}

export default PopupWithForm;
