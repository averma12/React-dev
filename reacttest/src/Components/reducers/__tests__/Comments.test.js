import CommentsReducer from "../Comments";
import { SAVE_COMMENT } from "../../actions/types";

it( "describe the functionality of a reducer", () =>{
const action = {
    type: SAVE_COMMENT,
    payload: "Hello World",
};

const newState = CommentsReducer([], action);
expect(newState).toEqual(["Hello World"]);
});
