import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

class HeaderComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isDesktop: false,
      dropdown: false
    }

    this.updatePredicate = this.updatePredicate.bind(this);
    this.dropdownHeader = this.dropdownHeader.bind(this)
  }

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 600 });
    if (window.innerWidth > 600) {
      let headerDiv = document.getElementById("headerDiv")
      headerDiv.style.height = '6rem'
    }
  }

  dropdownHeader() {
    let dropdown = this.state.dropdown
    let headerDiv = document.getElementById("headerDiv")
    if (dropdown) {
      headerDiv.style.height = '6rem'
    } else {
      headerDiv.style.height = '20rem'
    }
    this.setState({ dropdown : !dropdown })
  }

  render() {
    const isDesktop = this.state.isDesktop;
    if (isDesktop) {
      return (
        <div className='headerDiv' id='headerDiv'>
          <h1><Link to='/' id='headerLink'>Nicholas White</Link></h1>

          <ul id='mainHeaderSubList'>
            <li><Link to='/resume' className='headerTab'>Resume</Link></li>
            <li><Link to='/projects' className='headerTab'>Projects</Link></li>
            <li><Link to='/research' className='headerTab'>Research</Link></li>
            <li><Link to='/hackathons' className='headerTab'>Hackathons</Link></li>
            <li><Link to='/articles' className='headerTab'>Articles</Link></li>
          </ul>
        </div>
      );
    } else {
      if (this.state.dropdown) {
        return (
          <div className='headerDiv' id='headerDiv'>
            <div className='headerTopDiv'>

              <FontAwesome
                onClick={this.dropdownHeader}
                className='dropDownIcon'
                name='arrow-circle-up'
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
              />
              <h1><Link to='/' id='headerLink'>Nicholas White</Link></h1>
            </div>

            <ul id='mainHeaderSubList'>
              <li><Link to='/resume' className='headerTab'>Resume</Link></li>
              <li><Link to='/projects' className='headerTab'>Projects</Link></li>
              <li><Link to='/research' className='headerTab'>Research</Link></li>
              <li><Link to='/hackathons' className='headerTab'>Hackathons</Link></li>
              <li><Link to='/articles' className='headerTab'>Articles</Link></li>
            </ul>
          </div>
        );
      } else {
        return (
          <div className='headerDiv' id='headerDiv'>

            <div className='headerTopDiv'>
              <FontAwesome
                onClick={this.dropdownHeader}
                className='dropDownIcon'
                name='arrow-circle-down'
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
              />

              <h1><Link to='/' id='headerLink'>Nicholas White</Link></h1>
            </div>
          </div>
        );
      }
    }
  }
}

export default HeaderComponent;
