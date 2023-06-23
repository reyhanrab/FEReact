import { combineReducers } from "redux";
import GeneralReducer from "./GeneralReducer";
import StaticDataReducer from "./StaticDataReducer";
import ProjectReducer from "./ProjectReducer";


export default combineReducers({
  GeneralReducer: GeneralReducer,
  StaticDataReducer: StaticDataReducer,
  ProjectReducer: ProjectReducer
});