import {
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_FETCH_ERROR,
  PRODUCTS_LOADING,
  //
  PRODUCT_FETCH_SUCCESS,
  PRODUCT_FETCH_ERROR,
  PRODUCT_LOADING,
} from "../actions/actionType";

const baseUrl = `https://p3-challenge-arya.herokuapp.com`;

export const setProducts = (payload) => {
  return {
    type: PRODUCTS_FETCH_SUCCESS,
    payload,
  };
};

export const setProductsError = (payload) => {
  return {
    type: PRODUCTS_FETCH_ERROR,
    payload,
  };
};

export const setProductsLoading = (payload) => {
  return {
    type: PRODUCTS_LOADING,
    payload,
  };
};

export const setProduct = (payload) => {
  return {
    type: PRODUCT_FETCH_SUCCESS,
    payload,
  };
};

export const setProductError = (payload) => {
  return {
    type: PRODUCT_FETCH_ERROR,
    payload,
  };
};

export const setProductLoading = (payload) => {
  return {
    type: PRODUCT_LOADING,
    payload,
  };
};

export const fetchProducts = () => {
  return (dispatch) => {
    return fetch(`${baseUrl}/customers/products`)
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Error");
        }
        return resp.json();
      })
      .then((data) => dispatch(setProducts(data)))
      .catch((err) => dispatch(setProductsError(err)))
      .finally(() => dispatch(setProductsLoading(true)));
  };
};

export const fetchProduct = (productId) => {
  return (dispatch) => {
    return fetch(`${baseUrl}/customers/products/${productId}`)
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Error");
        }
        return resp.json();
      })
      .then((data) => dispatch(setProduct(data)))
      .catch((err) => dispatch(setProductError(err)))
      .finally(() => dispatch(setProductLoading(true)));
  };
};
