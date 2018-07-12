import React from "react";

import CommentBox from "Components/CommentBox";

import { mount } from "enzyme";

let wrapped;

beforeEach(() => {
    wrapped = mount(<CommentBox />);
});


afterEach(() => {
    wrapped.unmount();
});

it(" shows a comment box and a button ", () => {
 expect(wrapped.find("textarea").length).toEqual(1);
 expect(wrapped.find("button").length).toEqual(1);
})