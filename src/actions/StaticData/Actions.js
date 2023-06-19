import { PRIORITY_DATA, STATUS_DATA } from "./Types.js";

/*------------------------------GET HIstory survey flows -------------------------------------------*/

export const PRIORITYDATA = (value) => {
  return {
    type: PRIORITY_DATA,
    payload: { value },
  };
};

export const STATUSDATA = (value) => {
  return {
    type: STATUS_DATA,
    payload: { value },
  };
};
