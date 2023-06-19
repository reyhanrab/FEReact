import { SUCCESS_MSG, ERROR_MSG, USER_DATA } from "./Types.js";

/*------------------------------GET HIstory survey flows -------------------------------------------*/

export const SUCCESSMSG = (value) => {
  return {
    type: SUCCESS_MSG,
    payload: { value },
  };
};

export const ERRORMSG = (value) => {
  return {
    type: ERROR_MSG,
    payload: { value },
  };
};

export const USERDATA = (value) => {
  return {
    type: USER_DATA,
    payload: { value },
  };
};
