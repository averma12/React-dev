import { SAVE_COMMENT,FETCH_COMMENTS} from "./types";
import axios from "axios";
/*const saveComment = comment => ({
        type: SAVE_COMMENT,
        payload: comment,
    });*/

    function saveComment(comment) {
        return {
          type: SAVE_COMMENT,
          payload: comment,
        };
      }

    function fetchComments() {
      const response = axios.get("http://jsonplaceholder.typicode.com/comments");

        return {
          type: FETCH_COMMENTS,
          payload: response,
        };
    }
export { saveComment, fetchComments };
