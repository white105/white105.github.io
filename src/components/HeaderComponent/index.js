import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

class HeaderComponent extends Component {

  render() {
    return (
      <div className='headerDiv'>
        <h1>Nicholas <b>White</b></h1>

        <ul id='mainHeaderSubList'>
          <li><Link to='/resume'>Resume</Link></li>
          <li><Link to='/projects'>Projects</Link></li>
          <li><Link to='/research'>Research</Link></li>
          <li><Link to='/articles'>Articles</Link></li>
        </ul>
      </div>
    );
  }
}

export default HeaderComponent;
