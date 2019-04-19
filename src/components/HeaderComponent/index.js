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
    <li><Link to='/expirience' className='headerTab'>Experience</Link></li>
    <li><Link to='/projects' className='headerTab'>projects</Link></li>
    <li><Link to='/research' className='headerTab'>Research</Link></li>
    <li><Link to='/hackathons' className='headerTab'>Hackathons</Link></li>
    <li><Link to='/articles' className='headerTab'>Articles</Link></li>
    </ul>

    if (current_page == "expirience") {
      mainHeaderList = <ul id='mainHeaderSubList'>
      <li><div id='current_page_icon_top'></div><Link id="underlined" to='/expirience' className='headerTab'>Experience</Link><div id='current_page_icon_bottom'></div></li>
        <li><Link to='/projects' className='headerTab'>projects</Link></li>
        <li><Link to='/research' className='headerTab'>Research</Link></li>
        <li><Link to='/hackathons' className='headerTab'>Hackathons</Link></li>
        <li><Link to='/articles' className='headerTab'>Articles</Link></li>
      </ul>
    } else if (current_page == "projects") {
      mainHeaderList = <ul id='mainHeaderSubList'>
      <li><Link to='/expirience' className='headerTab'>Experience</Link></li>
        <li><div id='current_page_icon_top'></div><Link id="underlined" to='/projects' className='headerTab'>projects</Link><div id='current_page_icon_bottom'></div></li>
        <li><Link to='/research' className='headerTab'>Research</Link></li>
        <li><Link to='/hackathons' className='headerTab'>Hackathons</Link></li>
        <li><Link to='/articles' className='headerTab'>Articles</Link></li>
      </ul>
    } else if (current_page == "research") {
      mainHeaderList = <ul id='mainHeaderSubList'>
      <li><Link to='/expirience' className='headerTab'>Experience</Link></li>
        <li><Link to='/projects' className='headerTab'>projects</Link></li>
        <li><div id='current_page_icon_top'></div><Link id="underlined" to='/research' className='headerTab'>Research</Link><div id='current_page_icon_bottom'></div></li>
        <li><Link to='/hackathons' className='headerTab'>Hackathons</Link></li>
        <li><Link to='/articles' className='headerTab'>Articles</Link></li>
      </ul>
    } else if (current_page == "hackathons") {
      mainHeaderList = <ul id='mainHeaderSubList'>
        <li><Link to='/expirience' className='headerTab'>Experience</Link></li>
          <li><Link to='/projects' className='headerTab'>projects</Link></li>
          <li><Link to='/research' className='headerTab'>Research</Link></li>
          <li><div id='current_page_icon_top'></div><Link id="underlined" to='/hackathons' className='headerTab'>Hackathons</Link><div id='current_page_icon_bottom'></div></li>
        <li><Link to='/articles' className='headerTab'>Articles</Link></li>
      </ul>
    } else if (current_page == "articles") {
      mainHeaderList = <ul id='mainHeaderSubList'>
        <li><Link to='/expirience' className='headerTab'>Experience</Link></li>
          <li><Link to='/projects' className='headerTab'>projects</Link></li>
          <li><Link to='/research' className='headerTab'>Research</Link></li>
          <li><Link to='/hackathons' className='headerTab'>Hackathons</Link></li>
          <li><div id='current_page_icon_top'></div><Link id="underlined" to='/articles' className='headerTab'>Articles</Link><div id='current_page_icon_bottom'></div></li>
      </ul>
    } else if (current_page == "design") {
      mainHeaderList = <ul id='mainHeaderSubList'>
        <li><Link to='/portfolio' className='headerTab'>Portfolio</Link></li>
        <li><Link to='/articles' className='headerTab'>Articles</Link></li>
        <li><div id='current_page_icon_top'></div><Link id="underlined" to='/design' className='headerTab'>Designs</Link><div id='current_page_icon_bottom'></div></li>
        <li><Link to='/contact' className='headerTab'>Contact</Link></li>
      </ul>
    } else if (current_page == "contact") {
      mainHeaderList = <ul id='mainHeaderSubList'>
        <li><Link to='/portfolio' className='headerTab'>Portfolio</Link></li>
        <li><Link to='/services' className='headerTab'>Services</Link></li>
        <li><div id='current_page_icon_top'></div><Link id="underlined" to='/contact' className='headerTab'>Contact</Link><div id='current_page_icon_bottom'></div></li>
      </ul>
    } else if (current_page == "services") {
      mainHeaderList = <ul id='mainHeaderSubList'>
        <li><Link to='/portfolio' className='headerTab'>Portfolio</Link></li>
        <li><div id='current_page_icon_top'></div><Link id="underlined" to='/services' className='headerTab'>Services</Link><div id='current_page_icon_bottom'></div></li>
        <li><Link to='/contact' className='headerTab'>Contact</Link></li>
      </ul>
    } else if (current_page == "portfolio") {
      mainHeaderList = <ul id='mainHeaderSubList'>
        <li><div id='current_page_icon_top'></div><Link id="underlined" to='/portfolio' className='headerTab'>Portfolio</Link><div id='current_page_icon_bottom'></div></li>
        <li><Link to='/services' className='headerTab'>Services</Link></li>
        <li><Link to='/contact' className='headerTab'>Contact</Link></li>
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
            <li><Link to='/expirience' className='headerTab'>Experience</Link></li>
              <li><Link to='/projects' className='headerTab'>projects</Link></li>
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

              <h1 id='headerName'><Link to='/' id='headerLink'>Nicholas White</Link></h1>
            </div>
          </div>
        );
      }
    }
  }
}

export default HeaderComponent;
