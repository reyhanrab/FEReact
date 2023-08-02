import { PRIORITY_DATA, STATUS_DATA, ROLES_DATA } from "./Types.js";


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

export const ROLESDATA = (value) => {
  return {
    type: ROLES_DATA,
    payload: { value },
  };
};