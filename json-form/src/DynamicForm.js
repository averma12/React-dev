import React, {Component} from "react";
import "./DynamicForm.css";

class DynamicForm extends Component {
constructor(props){
    super(props);
   // this.myRef = React.createRef();
    this.state = {

    }
}

componentDidMount(){
    console.log(this.props);
}

onSubmit = (event) => {
    event.preventDefault();
    if (this.props.onSubmit) {
      this.props.onSubmit(this.state);
    }

}

onChange = (event,key) => {
    console.log(this[key].value);
    console.log("key",key);
    this.setState({[key]:this[key].value});
}

renderForm = (event) => {
    let model = this.props.model;
    let form = model.map(m => {
        let key = m.key;
        let type = m.type;
        let props = m.props || {};
        
        return (
            <div key={key} className="form-group">
            <label className="form-label"
            key={`l-${key}`}
            htmlFor={key}>
            {m.label}
            </label>
            <input {...props} className="form-input" type={type} key={`i-${key}`} ref={key => this[m.key]=key} onChange={(e) => this.onChange(e,key)}/>
            </div>
        );
    })
    return form;
}


render(){
    return(
        <div className={this.props.className}>
            <h3 className="form-title">{this.props.title}</h3>
                <form className="dynamic-form" onSubmit={(e)=>{this.onSubmit(e)}}>
                    {this.renderForm()}
                    <div className="form-actions">
                        <button type="submit">submit</button>
                    </div>
                </form>
            </div>
    )
}
}

export default DynamicForm;