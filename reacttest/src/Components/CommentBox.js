import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./actions";

class CommentBox extends Component {
    state = {
        text: "hello",
    };

    handleChange = param => (event) => {
        console.log(param);
        this.setState({ text: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.saveComment(this.state.text);
        this.setState({ text: "" });
     }

    render() {
       return (
           <div>
           <form onSubmit={this.handleSubmit}>
            <h4>
            Enter CommentBox
            </h4>
           <textarea  onChange={this.handleChange("Hello")} value={this.state.text} />
            
           <div>
               <button>
                   Submit
               </button>
            </div>
           </form>
           </div>
           <button onClick={this.props.fetchComments}>
               Fetch Comments
            </button>
       );
    }
}


export default connect(null, actions)(CommentBox);
