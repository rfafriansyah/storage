import { USER_FETCH_ERROR } from "../actions/actionType";

const initialState = {
  userError: "",
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_FETCH_ERROR:
      return {
        ...state,
        userError: action.payload,
      };
    default:
      return state;
  }
}

export default userReducer;
