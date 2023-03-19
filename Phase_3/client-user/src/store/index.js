import { createStore, applyMiddleware, combineReducers } from "redux";
import productReducer from "./reducers/productReducer";
import categoryReducer from "./reducers/categoryReducer";
import logger from "./middlewares/logger";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  productReducer,
  categoryReducer,
});

let store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
