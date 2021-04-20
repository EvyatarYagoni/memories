import { combineReducers } from "redux";
import postsReducer, { currentIDReducer } from "./posts";

export default combineReducers({
  posts: postsReducer,
  currentId: currentIDReducer,
});
