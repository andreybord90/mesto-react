import React from "react";
// import { useEffect } from "react";

function ImagePopup({
  card,
  onClose,
  useClosePopup,
  isOpen,
  useClosePopupByEscape,
}) {
  useClosePopup("popup_opened", "popup__exit", onClose, isOpen);
  useClosePopupByEscape(isOpen);

  // useEffect(() => {
  //   const handleClose = (e) => {
  //     if (
  //       e.target.classList.contains("popup_opened") ||
  //       e.target.classList.contains("popup__exit")
  //     ) {
  //       onClose();
  //     }
  //   };
  //   document.addEventListener("click", handleClose);
  //   return () => {
  //     document.removeEventListener("click", handleClose);
  //   };
  // });

  return (
    <>
      <div
        className={`popup popup_type_image ${card.link ? "popup_opened" : ""}`}
      >
        <div className="popup__container popup__container_type_image">
          <button
            className={`popup__exit popup__exit_type_image`}
            type="button"
          ></button>
          <div className="popup__wrapper-image" name="popup__image">
            <img src={card.link} alt={card.name} className="popup__image" />
          </div>
          <h2 className="popup__title popup__title_type_image">{card.name}</h2>
        </div>
      </div>
    </>
  );
}

export default ImagePopup;
