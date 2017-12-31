import React, {Component} from 'react';
import Lease from './Lease';

class Asset extends Component {
    constructor(props){
        super(props);
        this.state = {
            valuefromApp:''
        }

    }
   componentWillMount(){

    console.log(this.props);
    this.setState({valuefromApp:this.props.val})
   }
    componentWillReceiveProps ( nextProps ) {
        console.log("nextProps of Asset.js",nextProps);
        if(this.props === nextProps){
        console.log( '[UPDATE Asset.js] Inside componentWillReceiveProps', nextProps );
    }
    else{
        console.log("In else of WillReceiveProps Asset",nextProps);
        this.setState({valuefromApp:nextProps.val});
    }
    }
    
   shouldComponentUpdate(nextProps,nextState){
       console.log(this.props,nextState);
       if(this.state.valuefromApp === nextProps.val){
           
           console.log("Not updating asset.js");
           return false;
       }
       else{
           return true;
       }
   }

lease = "Asset Screen";
render(){
    return(
    <div>{this.lease}{this.props.val} </div>
    )
}

}

export default Asset;