import React, { Component } from 'react';
import DynamicForm from "./DynamicForm";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        {id: 1, name:"a", age:29, qualification:"B.Com",rating:3,gender:"male",
            city:"Kerala",skills:["reactjs","angular","vuejs"]},
        {id: 2, name:"b", age:35, qualification:"B.Sc",rating:5,gender:"female",
            city:"Mumbai",skills:["reactjs","angular"]},
        {id: 3, name:"c", age:42, qualification:"B.E",rating:3,gender:"female",
          city:"Bangalore",skills:["reactjs"]},
      ]

    };
  }

  onSubmit = (model) => {
    console.log("ye model hai",model);
    console.log(JSON.stringify(model));
  }
  render() {
    return (
      <div className="App">
        <DynamicForm className = "form"
        title = "Registration"
          
          model={[
            {key: "name", label: "Name", props: {required: true}},
            {key: "age",label: "Age", type: "number"},
            {key: "rating",label: "Rating", type: "number", props:{min:0,max:5}},
            {key: "gender",label: "Gender", type:"radio",options:[
              {key:"male",label:"Male",name:"gender",value:"male"},
              {key:"female",label:"Female",name: "gender",value:"female"}
            ]},
            {key: "qualification",label: "Qualification"},
            {key: "city",label:"City", type:"select", value: "Kerala", options: [
                {key:"mumbai",label:"Mumbai",value:"Mumbai"},
                {key:"bangalore",label:"Bangalore",value:"Bangalore"},
                {key:"kerala",label:"Kerala",value:"Kerala"},
            ]},
            {key: "skills",label:"Skills", type:"checkbox", options: [
                {key:"reactjs",label:"ReactJS",value:"reactjs"},
                {key:"angular",label:"Angular",value:"angular"},
                {key:"vuejs",label:"VueJS",value:"vuejs"},
            ]},

          ]}
          onSubmit = {(model) => {this.onSubmit(model)}} 
        />
      </div>
    );
  }
}

export default App;
