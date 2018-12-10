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
      this.setState({ dropdown : false });
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
      headerDiv.style.height = '30rem'
    }
    this.setState({ dropdown : !dropdown })
  }

  render() {
    const isDesktop = this.state.isDesktop;
    var current_page_list = window.location.href.split('/');
    var current_page = current_page_list[current_page_list.length-1]

    var mainHeaderList = <ul id='mainHeaderSubList'>
      <li><Link to='/resume' className='headerTab'>Resume</Link></li>
      <li><Link to='/projects' className='headerTab'>Projects</Link></li>
      <li><Link to='/research' className='headerTab'>Research</Link></li>
      <li><Link to='/hackathons' className='headerTab'>Hackathons</Link></li>
      <li><Link to='/articles' className='headerTab'>Articles</Link></li>
      <li><Link to='/design' className='headerTab'>Designs</Link></li>
    </ul>

    if (current_page == "resume") {
      mainHeaderList = <ul id='mainHeaderSubList'>
        <li><div id='current_page_icon_top'></div><Link to='/resume' className='headerTab'>Resume</Link><div id='current_page_icon_bottom'></div></li>
        <li><Link to='/projects' className='headerTab'>Projects</Link></li>
        <li><Link to='/research' className='headerTab'>Research</Link></li>
        <li><Link to='/hackathons' className='headerTab'>Hackathons</Link></li>
        <li><Link to='/articles' className='headerTab'>Articles</Link></li>
        <li><Link to='/design' className='headerTab'>Designs</Link></li>
      </ul>
    } else if (current_page == "projects") {
      mainHeaderList = <ul id='mainHeaderSubList'>
        <li><Link to='/resume' className='headerTab'>Resume</Link></li>
        <li><div id='current_page_icon_top'></div><Link to='/projects' className='headerTab'>Projects</Link><div id='current_page_icon_bottom'></div></li>
        <li><Link to='/research' className='headerTab'>Research</Link></li>
        <li><Link to='/hackathons' className='headerTab'>Hackathons</Link></li>
        <li><Link to='/articles' className='headerTab'>Articles</Link></li>
        <li><Link to='/design' className='headerTab'>Designs</Link></li>
      </ul>
    } else if (current_page == "research") {
      mainHeaderList = <ul id='mainHeaderSubList'>
        <li><Link to='/resume' className='headerTab'>Resume</Link></li>
        <li><Link to='/projects' className='headerTab'>Projects</Link></li>
        <li><div id='current_page_icon_top'></div><Link to='/research' className='headerTab'>Research</Link><div id='current_page_icon_bottom'></div></li>
        <li><Link to='/hackathons' className='headerTab'>Hackathons</Link></li>
        <li><Link to='/articles' className='headerTab'>Articles</Link></li>
        <li><Link to='/design' className='headerTab'>Designs</Link></li>
      </ul>
    } else if (current_page == "hackathons") {
      mainHeaderList = <ul id='mainHeaderSubList'>
        <li><Link to='/resume' className='headerTab'>Resume</Link></li>
        <li><Link to='/projects' className='headerTab'>Projects</Link></li>
        <li><Link to='/research' className='headerTab'>Research</Link></li>
        <li><div id='current_page_icon_top'></div><Link to='/hackathons' className='headerTab'>Hackathons</Link><div id='current_page_icon_bottom'></div></li>
        <li><Link to='/articles' className='headerTab'>Articles</Link></li>
        <li><Link to='/design' className='headerTab'>Designs</Link></li>
      </ul>
    } else if (current_page == "articles") {
      mainHeaderList = <ul id='mainHeaderSubList'>
        <li><Link to='/resume' className='headerTab'>Resume</Link></li>
        <li><Link to='/projects' className='headerTab'>Projects</Link></li>
        <li><Link to='/research' className='headerTab'>Research</Link></li>
        <li><Link to='/hackathons' className='headerTab'>Hackathons</Link></li>
        <li><div id='current_page_icon_top'></div><Link to='/articles' className='headerTab'>Articles</Link><div id='current_page_icon_bottom'></div></li>
        <li><Link to='/design' className='headerTab'>Designs</Link></li>
      </ul>
    } else if (current_page == "design") {
      mainHeaderList = <ul id='mainHeaderSubList'>
        <li><Link to='/resume' className='headerTab'>Resume</Link></li>
        <li><Link to='/projects' className='headerTab'>Projects</Link></li>
        <li><Link to='/research' className='headerTab'>Research</Link></li>
        <li><Link to='/hackathons' className='headerTab'>Hackathons</Link></li>
        <li><Link to='/articles' className='headerTab'>Articles</Link></li>
        <li><div id='current_page_icon_top'></div><Link to='/design' className='headerTab'>Designs</Link><div id='current_page_icon_bottom'></div></li>
      </ul>
    }

    console.log("current_page", current_page)
    if (isDesktop) {
      return (
        <div className='headerDiv' id='headerDiv'>
          <h1 id='headerName'><Link to='/' id='headerLink'>Nicholas White</Link></h1>

          {mainHeaderList}
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
              <h1 id='headerName'><Link to='/' id='headerLink'>Nicholas White</Link></h1>
            </div>

            <ul id='mainHeaderSubList'>
              <li><Link to='/resume' className='headerTab'>Resume</Link></li>
              <li><Link to='/projects' className='headerTab'>Projects</Link></li>
              <li><Link to='/research' className='headerTab'>Research</Link></li>
              <li><Link to='/hackathons' className='headerTab'>Hackathons</Link></li>
              <li><Link to='/articles' className='headerTab'>Articles</Link></li>
              <li><Link to='/design' className='headerTab'>Design</Link></li>
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

              <h1 id='headerName'><Link to='/' id='headerLink'>Nicholas White</Link></h1>
            </div>
          </div>
        );
      }
    }
  }
}

export default HeaderComponent;
