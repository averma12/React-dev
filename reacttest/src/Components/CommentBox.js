import React, { Component } from "react";

class CommentBox extends Component {
    state = {
        text: "hello",
    };
    
    handleChange = (event) => {
        this.setState({ text: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
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


export default CommentBox;
