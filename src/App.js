import React, { Component } from 'react';
import './App.css';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home/index.js'
import HeaderComponent from './components/HeaderComponent/index.js'
import Articles from './components/Articles/index.js'
import Projects from './components/Projects/index.js'
import Research from './components/Research/index.js'
import Resume from './components/Resume/index.js'

import FontAwesome from 'react-fontawesome';

class App extends Component {

  constructor() {
    super()

    this.state = {

    }

    this.navigateSocial = this.navigateSocial.bind(this)
  }

  navigateSocial(event) {
    console.log('social network', event)
  }

  render() {
    return (
      <div id="app">


        <Router>
        <div className='content'>

          <HeaderComponent></HeaderComponent>

          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/research" component={Research} />
            <Route exact path="/articles" component={Articles} />
          </div>


        </div>
      </Router>

      <div className='siteFooter'>
        <div className='fontAwesomeIconDiv'>

          <a className='iconLink' href='https://github.com/white105'>
            <FontAwesome
              className='fontAwesomeIcon'
              name='github'
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />
          </a>

          <a className='iconLink' href='https://twitter.com/nick_w_white'>
            <FontAwesome
              className='fontAwesomeIcon'
              name='twitter'
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />
          </a>

          <a className='iconLink' href='https://www.linkedin.com/in/nicholas-w-white/'>
            <FontAwesome
              className='fontAwesomeIcon'
              name='linkedin'
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
