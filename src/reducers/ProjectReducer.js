import { PROJECTS_DATA } from "../actions/Projects/Types";

const initialState = {
  projectData: [],
};

const ProjectReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case PROJECTS_DATA:
      return Object.assign({}, state, {
        projectData: action.payload.value,
      });
    default:
      return state;
  }
};

export default ProjectReducer;
