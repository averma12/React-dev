/* Combined reducer */
import { combineReducers } from "redux";
import CommentReducers  from "./Comments";

export default combineReducers({
   comments: CommentReducers,
});
