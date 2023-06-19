import { SUCCESS_MSG, USER_DATA } from "../actions/General/Types";

const initialState = {
  successMsg: "",
  userData: [],
};

const GeneralReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SUCCESS_MSG:
      return Object.assign({}, state, {
        successMsg: action.payload.value,
      });
    case USER_DATA:
      return Object.assign({}, state, {
        userData: action.payload.value,
      });
    default:
      return state;
  }
};

export default GeneralReducer;
