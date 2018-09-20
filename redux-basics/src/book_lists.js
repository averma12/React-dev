import React , { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from "react-redux";
import { bindActionCreators} from "redux";
import { selectBook } from "./actions/index";

class BookList extends Component {
renderList = () => {
return this.props.books.map(book => {
    return <li key={book.title}
     className="list-group-item"
     onClick = {() => this.props.selectBook1(book)}>{book.title}</li>;
})
}
render(){
    //console.log(this.props)
    return(
        <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
}

}
function mapStateToProps(state) {
    // Whatever is returned will show up as props
    // inside of BookList
    return {
      books: state.books
    };
  }

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectBook1:selectBook},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(BookList);