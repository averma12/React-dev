import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Header.css';
import { NavLink } from 'react-router-dom';
import SearchResults from './SearchResults';


class Header extends Component {
    state = {
        searchQuery: ''
    }

handleChange = (event) => {
let query = event.target.value;
this.setState({searchQuery: query});

}

    render(){
        return(
  <nav className="navbar navbar-expand-sm bg-dark">


    <ul className="navbar-nav">
      <li className="nav-item"><a className="nav-link">< NavLink to="/Asset">Asset</NavLink> </a> </li>
      <li className="nav-item"><a className="nav-link"> <NavLink to="/Lease">Lease</NavLink> </a> </li>
      <li className="nav-item"><a className="nav-link"> <NavLink to="/Quote">Quote</NavLink> </a> </li>
    </ul> 
    
    <div className="search-container">
    <form className="form-inline" >
      <input className="form-control mr-sm-2" type="text" placeholder="Search.." name="search" onChange={this.handleChange}/>
        <button className="btn btn-success" type="submit" onClick={() => alert("Calling searchResults")}>Search</button>
    </form>
  </div>
   
  </nav>
        )
    }
}

export default Header;