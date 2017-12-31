import React from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';

import Lease from './Lease';


const LeaseScreen = () => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Lease</h2> 
      <ul className="course-nav">
        <li><NavLink to='/Lease'>HTML</NavLink></li>
        <li><NavLink to='/courses/css'>CSS</NavLink></li>
        <li><NavLink to='/courses/javascript'>JavaScript</NavLink></li>
      </ul>
    </div>
    
    {/* Write routes here... */}
    <Route exact path="/courses" render={ () => <Redirect to="/courses/html" /> } />
    <Route path="/courses/html" component={HTML} />
    <Route path="/courses/css" component={CSS} />
    <Route path="/courses/javascript" component={JavaScript} />
  </div>
);

export default Courses;







