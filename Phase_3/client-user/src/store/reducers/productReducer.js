import {
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_FETCH_ERROR,
  PRODUCTS_LOADING,
  //
  PRODUCT_FETCH_SUCCESS,
  PRODUCT_FETCH_ERROR,
  PRODUCT_LOADING,
} from "../actions/actionType";

const initialState = {
  products: [],
  errorProducts: "",
  loadingProducts: false,
  product: "",
  errorProduct: {},
  loadingProduct: false,
};

function productReducer(state = initialState, action) {
  switch (action.type) {
    case PRODUCTS_FETCH_SUCCESS:
      return {
        ...state,
        products: action.payload,
      };
    case PRODUCTS_FETCH_ERROR:
      return {
        ...state,
        errorProducts: action.payload,
      };
    case PRODUCTS_LOADING:
      return {
        ...state,
        loadingProducts: action.payload,
      };
    case PRODUCT_FETCH_SUCCESS:
      return {
        ...state,
        product: action.payload,
      };
    case PRODUCT_FETCH_ERROR:
      return {
        ...state,
        errorProduct: action.payload,
      };
    case PRODUCT_LOADING:
      return {
        ...state,
        loadingProduct: action.payload,
      };
    default:
      return state;
  }
}

export default productReducer;
