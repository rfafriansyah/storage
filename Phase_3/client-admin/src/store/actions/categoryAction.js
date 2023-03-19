import {
  CATEGORIES_FETCH_SUCCESS,
  CATEGORIES_FETCH_ERROR,
  CATEGORIES_LOADING,
} from "../actions/actionType";

const baseUrl = `https://p3-challenge-arya.herokuapp.com`;

export const setCategories = (payload) => {
  return {
    type: CATEGORIES_FETCH_SUCCESS,
    payload,
  };
};

export const setErrorCategories = (payload) => {
  return {
    type: CATEGORIES_FETCH_ERROR,
    payload,
  };
};

export const setLoadingCategories = (payload) => {
  return {
    type: CATEGORIES_LOADING,
    payload,
  };
};

export const fetchCategories = () => {
  return (dispatch) => {
    fetch(`${baseUrl}/categories`, {
      headers: {
        access_token: localStorage.access_token,
      },
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Error");
        }
        return resp.json();
      })
      .then((data) => dispatch(setCategories(data)))
      .catch((err) => dispatch(setErrorCategories(err)))
      .finally(() => dispatch(setLoadingCategories(true)));
  };
};

export const deleteCategory = (id, categories, idx) => {
  return (dispatch) => {
    fetch(`${baseUrl}/categories/${id}`, {
      method: "delete",
      headers: {
        access_token: localStorage.access_token,
      },
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Error");
        }
        return resp.json();
      })
      .then(() => {
        let newCategories = categories;
        newCategories.splice(idx, 1);
        dispatch(setCategories(newCategories));
      })
      .catch((err) => console.log(err));
  };
};

export const postCategory = (content) => {
  return (dispatch) => {
    return fetch(`${baseUrl}/categories`, {
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
      .then(() => {})
      .catch((err) => dispatch(setErrorCategories(err)));
  };
};
