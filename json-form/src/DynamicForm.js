import React, {Component} from "react";
import "./DynamicForm.css";

class DynamicForm extends Component {
constructor(props){
    super(props);
    this.state = {

    }
}

componentDidMount(){
    console.log(this.props);
}


render(){
    return(
        <div>
            So dynamic bro
            </div>
    )
}
}

export default DynamicForm;