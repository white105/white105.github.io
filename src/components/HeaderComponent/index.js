import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderComponent extends Component {

  render() {
    return (
      <div className='headerDiv'>
        <h1><Link to='/' style={{'color' : 'black', 'textAlign' : 'center'}}>Nicholas White</Link></h1>

        <div className='mainHeaderSubListContainer'>
          <ul id='mainHeaderSubList'>
            <li><Link to='/resume' className='headerTab'>Resume</Link></li>
            <li><Link to='/projects' className='headerTab'>Projects</Link></li>
            <li><Link to='/research' className='headerTab'>Research</Link></li>
            <li><Link to='/articles' className='headerTab'>Articles</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default HeaderComponent;
