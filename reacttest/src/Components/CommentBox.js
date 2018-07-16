import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./actions";

class CommentBox extends Component {
    state = {
        text: "hello",
    };
    
    handleChange = (event) => {
        this.setState({ text: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.saveComment(this.state.text);
        this.setState({ text: "" });
     }

    render() {
       return (
           <form onSubmit={this.handleSubmit}>
            <h4>
            Enter CommentBox
            </h4>
           <textarea onChange={this.handleChange} value={this.state.text} />
            
           <div>
               <button>
                   Submit
               </button>
            </div>
           </form>
       );
    }
}


export default connect(null, actions)(CommentBox);
