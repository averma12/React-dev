import React, { Component } from "react";
import CommentBox from "./Components/CommentBox";
import CommentList from "./Components/CommentList";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Hi there!",
    };
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro"> 
        {this.state.name}
        </p>
        <CommentBox />
        <CommentList />
      </div>
    );
  }
}

export default App;
