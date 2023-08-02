import { PROJECTS_DATA } from "../actions/Projects/Types";

const initialState = {
  projectData: [],
};

const ProjectReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case PROJECTS_DATA:
      // return Object.assign({}, state, {
      //   projectData: action.payload.value,
      // });
      return Object.freeze({
        ...state,
        projectData: Object.freeze(action.payload.value)
      });
    default:
      return state;
  }
};

export default ProjectReducer;
