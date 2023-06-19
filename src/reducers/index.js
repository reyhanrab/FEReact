import { combineReducers } from "redux";
import GeneralReducer from "./GeneralReducer";
import StaticDataReducer from "./StaticDataReducer";


export default combineReducers({
  GeneralReducer: GeneralReducer,
  StaticDataReducer: StaticDataReducer
});