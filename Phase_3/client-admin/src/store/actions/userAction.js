import { USER_FETCH_ERROR } from "./actionType";

const baseUrl = `https://p3-challenge-arya.herokuapp.com`;
// const baseUrl = `http://localhost:3000`;

export const setUserError = (payload) => {
  return {
    type: USER_FETCH_ERROR,
    payload,
  };
};

export const userLogin = (content) => {
  return (dispatch) => {
    return fetch(`${baseUrl}/users/login`, {
      method: `post`,
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.access_token,
      },
      body: JSON.stringify(content),
    })
      .then((resp) => {
        if (!resp.ok) {
          return resp.text().then((text) => {
            throw new Error(text);
          });
        }
        return resp.json();
      })
      .then((data) => {
        localStorage.setItem("access_token", data.access_token);
      })
      .catch((err) => dispatch(setUserError(err)));
  };
};

export const userRegister = (content) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      fetch(`${baseUrl}/users/register`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
        body: JSON.stringify(content),
      })
        .then((resp) => {
          if (!resp.ok) {
            return resp.text().then((text) => {
              throw new Error(text);
            });
          }
          return resp.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          dispatch(setUserError(err));
        });
    });
  };
};
