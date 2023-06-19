import { PRIORITY_DATA, STATUS_DATA } from "../actions/StaticData/Types";

const initialState = {
  priorityData: [],
  statusData: [],
};

const StaticDataReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case PRIORITY_DATA:
      return Object.assign({}, state, {
        priorityData: action.payload.value,
      });
    case STATUS_DATA:
      return Object.assign({}, state, {
        statusData: action.payload.value,
      });
    default:
      return state;
  }
};

export default StaticDataReducer;
