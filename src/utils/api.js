// function onResponce(res) {
//   return res.ok ? res.json() : Promise.reject(`Ошибка: ${res}`);
// }

class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }
  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res}`);
  }

  getCards() {
    return fetch(`${this._url}/cards`, { headers: this._headers }).then((res) =>
      this._checkResponse(res)
    );
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, { headers: this._headers }).then(
      (res) => this._checkResponse(res)
    );
  }

  setCardLike(cardId) {
    return fetch(`${this._url}/cards/likes/${cardId}`, {
      method: "PUT",
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  removeCardLike(cardId) {
    return fetch(`${this._url}/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }
  changeUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then((res) => this._checkResponse(res));
  }
  //Добавление карточки
  insertCard(data) {
    return fetch(`${this._url}/cards `, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then((res) => this._checkResponse(res));
  }
  //Удаление карточки
  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }
  updateUserAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then((res) => this._checkResponse(res));
  }
}

const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-30",
  headers: {
    authorization: "328ef2cf-f132-4d2f-959f-88c97b356965",
    "Content-Type": "application/json",
  },
});

export default api;
