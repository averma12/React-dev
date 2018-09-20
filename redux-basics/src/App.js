import React, { Component } from 'react';
import logo from './logo.svg';
import BookList from './book_lists';
import BookDetail from './book_detail';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}

export default App;
