import { PROJECTS_DATA } from "./Types.js";

/*------------------------------ GET ALL PROJECTS -------------------------------------------*/

export const PROJECTSDATA = (value) => {
  return {
    type: PROJECTS_DATA,
    payload: { value },
  };
};
