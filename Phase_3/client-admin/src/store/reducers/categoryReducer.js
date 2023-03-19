import {
  CATEGORIES_FETCH_SUCCESS,
  CATEGORIES_FETCH_ERROR,
  CATEGORIES_LOADING,
} from "../actions/actionType";

const initialState = {
  categories: [],
  errorCategories: "",
  loadingCategories: false,
};

function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case CATEGORIES_FETCH_SUCCESS:
      return {
        ...state,
        categories: action.payload,
      };
    case CATEGORIES_FETCH_ERROR:
      return {
        ...state,
        errorCategories: action.payload,
      };
    case CATEGORIES_LOADING:
      return {
        ...state,
        loadingCategories: action.payload,
      };
    default:
      return state;
  }
}

export default categoryReducer;
