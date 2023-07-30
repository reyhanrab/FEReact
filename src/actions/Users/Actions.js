import { USER_DATA } from "./Types.js";

/*------------------------------SAVE USERS DATA-------------------------------------------*/

export const USERDATA = (value) => {
  return {
    type: USER_DATA,
    payload: { value },
  };
};
