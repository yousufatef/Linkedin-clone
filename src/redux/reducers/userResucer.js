import { SET_USER } from "../actions/actionTypes";

const initalState = {
  user: null,
};

const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
