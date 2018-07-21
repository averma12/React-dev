import { saveComment } from "../index";
import { SAVE_COMMENT } from "../types";

describe("save comment action", ()=>{
    it("has the correct action",()=>{
        const action = saveComment();
        expect(action.type).toEqual(SAVE_COMMENT);
    });
    it(" has the correct payload",()=>{
        const action = saveComment("action");
        expect(action.payload).toEqual("action");
    })
})