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
// const baseUrl = `http://localhost:3000`;

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
    return fetch(`${baseUrl}/products`, {
      headers: { access_token: localStorage.access_token },
    })
      .then((resp) => {
        if (!resp.ok) {
          return resp.text().then((text) => {
            throw new Error(text);
          });
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
    return fetch(`${baseUrl}/products/${productId}`, {
      headers: { access_token: localStorage.access_token },
    })
      .then((resp) => {
        if (!resp.ok) {
          return resp.text().then((text) => {
            throw new Error(text);
          });
        }
        return resp.json();
      })
      .then((data) => dispatch(setProduct(data)))
      .catch((err) => dispatch(setProductError(err)))
      .finally(() => dispatch(setProductLoading(true)));
  };
};

export const postProducts = (content) => {
  return (dispatch) => {
    return fetch(`${baseUrl}/products`, {
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
      .catch((err) => dispatch(setProductsError(err)));
  };
};

export const deleteProduct = (id, products, idx) => {
  return (dispatch) => {
    fetch(`${baseUrl}/products/${id}`, {
      method: "delete",
      headers: { access_token: localStorage.access_token },
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Error");
        }
        return resp.json();
      })
      .then(() => {
        let newProducts = products;
        newProducts.splice(idx, 1);
        dispatch(setProducts(newProducts));
      })
      .catch((err) => console.log(err));
  };
};

export const putProduct = (productId, content) => {
  return (dispatch) => {
    return fetch(`${baseUrl}/products/${productId}`, {
      method: "put",
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
      .catch((err) => dispatch(setProductsError(err)));
  };
};
