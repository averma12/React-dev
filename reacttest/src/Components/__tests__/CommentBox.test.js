import React from "react";

import CommentBox from "Components/CommentBox";

import { mount } from "enzyme";

import Root from "../../Root";

let wrapped;

beforeEach(() => {
    wrapped = mount(
    <Root>
    <CommentBox />
    </Root>
    )
});


afterEach(() => {
    wrapped.unmount();
});

it(" shows a comment box and a button ", () => {
 expect(wrapped.find("textarea").length).toEqual(1);
 expect(wrapped.find("button").length).toEqual(1);
});


describe("the text area", () => {
beforeEach(() => {
    wrapped.find("textarea").simulate("change", {
        target: { value: "new comment" },
    });
    wrapped.update();
});

it("has a text area that users can type in", () => {
expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
});

it("clear out text area when form is submitted", () => {
wrapped.find("form").simulate("submit", {
   target: { value: "" },
});
});
});
