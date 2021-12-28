import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <body className="page">
      <div className="wrapper">
        <Header />
        <Main />
        <Footer />
      </div>
      <div className="popup popup-type-edit">
        <div className="popup__container">
          <button
            className="popup__exit popup__exit_type_edit"
            type="button"
            aria-label="кнопка закрыть"
          ></button>
          <form className="popup__form" name="popup__form" novalidate>
            <h2 className="popup__title">Редактировать профиль</h2>
            <input
              type="text"
              className="popup__text popup__text_type_name"
              name="name"
              placeholder="Имя"
              required
              minLength="2"
              maxLength="40"
              autocomplete="off"
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
              autocomplete="off"
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
          </form>
        </div>
      </div>
      <div className="popup popup_type_add">
        <div className="popup__container">
          <button
            className="popup__exit popup__exit_type_add"
            type="button"
            aria-label="кнопка закрыть"
          ></button>
          <form className="popup__form popup__form_type_add" name="popup__form">
            <h2 className="popup__title popup__title_type_add">Новое место</h2>
            <input
              autocomplete="off"
              type="text"
              className="popup__text popup__text_type_sign"
              name="name"
              placeholder="Название"
              required
              minLength="2"
              maxLength="30"
              id="sign"
            />
            <span className="popup__text-error" id="sign-error"></span>
            <input
              autocomplete="off"
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
          </form>
        </div>
      </div>
      <div className="popup popup_type_image">
        <div className="popup__container popup__container_type_image">
          <button
            className="popup__exit popup__exit_type_image"
            type="button"
            aria-label="кнопка закрыть"
          ></button>
          <div className="popup__wrapper-image" name="popup__image">
            <img
              src="#"
              alt="Изображение достопримечательности"
              className="popup__image"
            />
          </div>
          <h2 className="popup__title popup__title_type_image"></h2>
        </div>
      </div>
      <div className="popup popup_type_submit">
        <div className="popup__container">
          <button
            className="popup__exit popup__exit_type_submit"
            type="button"
            aria-label="кнопка закрыть"
          ></button>
          <form
            className="popup__form popup__form_type_submit"
            name="popup__form"
          >
            <h2 className="popup__title popup__title_type_submit">
              Вы уверены
            </h2>
            <button
              className="popup__button popup__button_type_submit"
              type="submit"
              aria-label="кнопка Удаление"
            >
              Да
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_avatar">
        <div className="popup__container">
          <button
            className="popup__exit popup__exit_type_avatar"
            type="button"
            aria-label="кнопка закрыть"
          ></button>
          <form
            className="popup__form popup__form_type_avatar"
            name="popup__form"
          >
            <h2 className="popup__title popup__title_type_avatar">
              Обновить аватар
            </h2>
            <input
              type="url"
              className="popup__text popup__text_type_avatar"
              name="avatar"
              required
              minLength="2"
              autocomplete="off"
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
          </form>
        </div>
      </div>
    </body>
  );
}

export default App;
