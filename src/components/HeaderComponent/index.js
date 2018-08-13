import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderComponent extends Component {

  render() {
    return (
      <div className='headerDiv'>
        <h1><Link to='/' id='headerLink'>Nicholas White</Link></h1>

        <ul id='mainHeaderSubList'>
          <li><Link to='/resume' className='headerTab'>Resume</Link></li>
          <li><Link to='/projects' className='headerTab'>Projects</Link></li>
          <li><Link to='/research' className='headerTab'>Research</Link></li>
          <li><Link to='/articles' className='headerTab'>Articles</Link></li>
        </ul>
      </div>
    );
  }
}

export default HeaderComponent;
