import { USER_DATA } from "../actions/Users/Types";

const initialState = {
  userData: [],
};

const UsersReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case USER_DATA:
      return Object.assign({}, state, {
        userData: action.payload.value,
      });
    default:
      return state;
  }
};

export default UsersReducer;
