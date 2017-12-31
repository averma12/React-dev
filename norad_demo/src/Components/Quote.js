import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Collapse} from 'react-bootstrap';
import './quote.css';
class Quote extends Component {
    constructor(props){
        super(props);
        this.state={
            empty:true
        }
    }
    
openTab = (event) => {
    let id = event.target.dataset.child;
    let elm = document.getElementById(id);
    
    if(elm.className === 'collapse'){
        elm.className = 'collapse show';
    } else {
        elm.className = 'collapse';
    }
}

handleChange = (event) =>{
    this.setState({
        empty: event.target.value.length === 0,
      });
}

render(){
    let a = document.getElementById('accordion');
    console.log(a);
    return(
    <div id="accordion" role="tablist">
        <input type="text" onChange={this.handleChange}/>
    <div className="card">
      <div className="card-header" role="tab" id="headingOne">
        <h5 className="mb-0">
          <a data-toggle="collapse" data-child="collapseOne" role="button" aria-expanded="true" aria-controls="collapseOne" onClick={this.openTab}>
            Collapsible Group Item #1
          </a>
        </h5>
      </div>
      
      <div id="collapseOne" className="collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
        <div className="card-body">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
        </div>
      </div>
      
    </div>
    
    
    <div className="card">
      <div className="card-header" role="tab" id="headingTwo">
        <h5 className="mb-0">
          <a className="collapsed" data-toggle="collapse" data-child="collapseTwo" role="button" aria-expanded="false" aria-controls="collapseTwo" onClick={this.openTab}>
            Collapsible Group Item #2
          </a>
        </h5>
      </div>
      <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
        <div className="card-body">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
        </div>
      </div>
    </div>
    <div className="card">
      <div className="card-header" role="tab" id="headingThree">
        <h5 className="mb-0">
          <a className="collapsed" data-toggle="collapse" href="#collapseThree" role="button"  data-child="collapseThree" aria-expanded="false" aria-controls="collapseThree" onClick={this.openTab}>
            Collapsible Group Item #3
          </a>
        </h5>
      </div>
      <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
        <div className="card-body">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
        </div>
      </div>
    </div>
  </div>
    )
}

}

export default Quote;