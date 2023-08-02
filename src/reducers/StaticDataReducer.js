import { PRIORITY_DATA, STATUS_DATA, ROLES_DATA } from "../actions/StaticData/Types";

const initialState = {
  priorityData: [],
  statusData: [],
  rolesData: [],
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
    case ROLES_DATA:
      return Object.assign({}, state, {
        rolesData: action.payload.value,
      });
    default:
      return state;
  }
};

export default StaticDataReducer;
