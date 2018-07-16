import { SAVE_COMMENT} from "./types";

const saveComment = comment => ({
        type: SAVE_COMMENT,
        payload: comment,
    });
export { saveComment };
