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
    return fetch(`${baseUrl}/customers/categories`)
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
