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
  render() {
    return (
      <div className="App">
        <DynamicForm/>
      </div>
    );
  }
}

export default App;
