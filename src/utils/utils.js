// import React from "react";
// import { useEffect } from "react";

// export function useClosePopupByEscape(closePopupHandler) {
//   const closeByEsc = (e) => {
//     if (e.key === "Escape") {
//       closePopupHandler();
//     }
//   };
//   React.useEffect(() => {
//     document.addEventListener("keydown", closeByEsc);
//     return () => document.removeEventListener("keydown", closeByEsc);
//   }, []);
// }

// export function useClosePopup(overlayClassName, closeButtonClassName, onClose) {
//   const handleClose = (e) => {
//     if (
//       e.target.classList.contains(overlayClassName /*"popup_opened"*/) ||
//       e.target.classList.contains(closeButtonClassName /*"popup__exit"*/)
//     ) {
//       if (onClose) {
//         onClose();
//       }
//     }
//   };

//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   useEffect(() => {
//     document.addEventListener("click", handleClose);
//     return () => {
//       document.removeEventListener("click", handleClose);
//     };
//   }, []);
// }
