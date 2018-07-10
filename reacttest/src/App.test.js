import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import CommentBox from "Components/CommentBox";
import CommentList from "Components/CommentList";
import App from "./App";

let wrapped;
beforeEach(() => {
  wrapped = shallow(<App />);
});

/* it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);

  expect(div.firstChild.innerHTML).toContain("Hi there!");
  ReactDOM.unmountComponentAtNode(div);
}); */

it("shows a comment box", () => {
  
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it("shows a comment list", () => {
  
  expect(wrapped.find(CommentList).length).toEqual(1);
});
