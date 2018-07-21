import React, { Component} from "react";
import { connect } from "react-redux";

class CommentList extends Component {
 
 renderComments = () => {
     this.props.comments.map(comment => {
         return <li key={comment}>{comment}</li>;
     });
 }
 
 render() {
     return (
         <div>
          <ul>
          {this.renderComments}
          </ul>
         </div>
     );
 }
}

function mapStatetoProps(state) {
    return {
        comments: state.comments,
    };
}

export default connect(mapStatetoProps, null)(CommentList);
