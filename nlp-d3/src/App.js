import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as d3 from "d3";

class App extends Component {
  render() {
    return (
      <div className="App">
       <p class="first-paragraph">Here's my first paragraph.</p>
       <p>Here are some reasons why d3 is cool:</p>
       <ol>
         <li>Makes data more engaging.</li>
         <li>Has built-in math helpers.</li>
         <li>Supports graph animations.</li>
         <li>Makes drawing graph axes a breeze!</li>
       </ol>
      </div>
    );
  }
}

export default App;
