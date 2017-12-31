import React, { Component } from 'react';
import { BrowserRouter ,Route } from 'react-router-dom';
import './App.css';
import Asset from './Components/Asset';
import Lease from './Components/Lease';
import Quote from './Components/Quote';
import 'bootstrap/dist/css/bootstrap.css';
//import Header from './Components/Header';
import SearchResults from './Components/SearchResults';
import { NavLink } from 'react-router-dom';
import _ from 'lodash';
import SplitterLayout from 'react-splitter-layout';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: 'wer',
      searchResults:false,
      assetScreen:false,
      leaseScreen:false,
      quoteScreen:false,
      splitScreen:false,
      name:''
  };

  this.screen = '';
    // This binding is necessary to make `this` work in the callback
    
  }
  
  handleChange = (event) => {
    let query = event.target.value;
    this.setState({searchQuery: query});
    
    }
    handleName = (event) => {
      this.setState({
        name: event.target.value,
      });
    }
   
   handleSubmit = () => {
      
     //event.preventDefault();
      if(this.state.searchQuery){
        console.log(this.state.searchQuery);
        //searchResults = <SearchResults />;
        this.setState({searchResults: true});
        
      }
    }

    onQuote = () => {
        this.setState({quoteScreen:true});
    }
    onLease = () => {
      this.setState({leaseScreen:true});
      if(this.state.assetScreen){
        this.screen =  <SplitterLayout>
        <div><Lease val={this.state.searchQuery}/></div>
        <div><Asset val={this.state.searchQuery}/></div>
      </SplitterLayout>;
      }
      else{
        this.screen = <Lease val={this.state.searchQuery} />
      }
    }
    onAsset = () => {
      this.setState({assetScreen:true});
      if(this.state.leaseScreen){
        this.screen =  <SplitterLayout>
        <div><Lease val={this.state.searchQuery}/></div>
        <div><Asset val={this.state.searchQuery}/></div>
      </SplitterLayout>;
      }
      else{
        this.screen = <Asset val={this.state.searchQuery}/>;
      }
    }
      
  render() {
    
    
    return (
      <BrowserRouter>
      <div className="container" onChange={this.handleName}>
      <h2>Hello {this.state.name}</h2>
      <div className="topnav">
      < NavLink to="/Asset" onClick={this.onAsset}>Asset</ NavLink>
      <NavLink to="/Lease" onClick={this.onLease}>Lease</NavLink>

      <NavLink to="/Quote" onClick={this.onQuote}>Quote</NavLink>
       
          <input type="text" list="data" placeholder="Search.." name="search" onBlur={this.handleChange}/>
          <datalist id="data">
                {[...this.state.searchQuery].map((item) =>
                    <option value={item} />
                )}
            </datalist>
          <button className="btn btn-success" type="submit" onClick={this.handleSubmit}>Search</button>
    
      </div>
    
  {this.state.searchResults? <SearchResults/>:""}
  {this.state.quoteScreen? <Quote/>:""}
  {this.screen}
      
     
      
      </div>
      
      </BrowserRouter>
    );
  }
}

export default App;
