import { SUCCESS_MSG } from "../actions/General/Types";

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
    default:
      return state;
  }
};

export default GeneralReducer;
