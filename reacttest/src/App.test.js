import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import App from "./App";
import CommentBox from "./Components/CommentBox";
import CommentList from "./Components/CommentList";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  
  expect(div.firstChild.innerHTML).toContain("Hi there!");
  ReactDOM.unmountComponentAtNode(div);
});

it("shows a comment box", () => {
  const wrapped =  shallow(<App /> );
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it("shows a comment list", () => {
  const wrapped =  shallow(<App /> );
  expect(wrapped.find(CommentList).length).toEqual(1);
});
