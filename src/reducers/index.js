import { combineReducers } from "redux";
import titleReducer from './titleReducer.js';

export default combineReducers({
  posts: titleReducer
});