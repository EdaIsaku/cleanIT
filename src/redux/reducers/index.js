import { combineReducers } from "redux";
import toolsReducer from "./toolsReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({ tools: toolsReducer, user: userReducer });

export default rootReducer;
