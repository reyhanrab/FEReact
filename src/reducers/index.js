import { combineReducers } from "redux";
import GeneralReducer from "./GeneralReducer";
import StaticDataReducer from "./StaticDataReducer";
import ProjectReducer from "./ProjectReducer";
import UsersReducer from "./UsersReducer";


export default combineReducers({
  GeneralReducer: GeneralReducer,
  StaticDataReducer: StaticDataReducer,
  ProjectReducer: ProjectReducer,
  UsersReducer: UsersReducer
});