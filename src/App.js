import React, { Component } from 'react';
import './App.css';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SwitchWithSlide from "./components/SwitchWithSlide";

import Home from './components/Home/index.js'
import HeaderComponent from './components/HeaderComponent/index.js'
import Articles from './components/Articles/index.js'
import Projects from './components/Projects/index.js'
import Hackathons from './components/Hackathons/index.js'
import Research from './components/Research/index.js'
import Resume from './components/Resume/index.js'
import Design from './components/Design/index.js'

import FontAwesome from 'react-fontawesome';

class App extends Component {

  constructor() {
    super()

    this.state = {
      current_page: 'home'
    }

    this.navigateSocial = this.navigateSocial.bind(this)
  }

  navigateSocial(event) {
    console.log('social network', event)
  }

  render() {
    const SwitchComponent = this.state.animate ? SwitchWithSlide : Switch;

    return (
      <div id="app">


        <Router>
        <div className='content'>

          <HeaderComponent></HeaderComponent>

          <hr id='splitter'></hr>

          <div id='content'>
            <Route exact path="/" component={Home} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path='/hackathons' component={Hackathons} />
            <Route exact path="/research" component={Research} />
            <Route exact path="/articles" component={Articles} />
            <Route exact path="/design" component={Design} />
          </div>


        </div>
      </Router>

      <hr></hr>

      <div className='siteFooter'>

        <div className='footerCopyright'>
          <h3 className='copyrightHeader'>&copy; NICHOLAS WHITE 2018</h3>
        </div>

        <div className='fontAwesomeIconDiv'>

          <a className='iconLink' href='https://github.com/white105' id='githubIcon'>
            <FontAwesome
              className='fontAwesomeIcon'
              name='github'
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />
          </a>

          <a className='iconLink' href='https://twitter.com/nick_w_white' id='twitterIcon'>
            <FontAwesome
              className='fontAwesomeIcon'
              name='twitter'
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />
          </a>

          <a className='iconLink' href='https://www.linkedin.com/in/nicholas-w-white/' id='linkedinIcon'>
            <FontAwesome
              className='fontAwesomeIcon'
              name='linkedin'
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />
          </a>

          <a className='iconLink' href='https://www.twitch.tv/matrixman' id='twitchIcon'>
            <FontAwesome
              className='fontAwesomeIcon'
              name='twitch'
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />
          </a>

        </div>
      </div>

      </div>
    )
  }
}

export default App;
