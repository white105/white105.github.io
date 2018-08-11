import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { NickSitePic } from './nick_site_pic.jpg';

import HeaderComponent from './components/HeaderComponent/index.js'
import Articles from './components/Articles/index.js'
import Projects from './components/Projects/index.js'
import Research from './components/Research/index.js'
import Resume from './components/Resume/index.js'

class App extends Component {

  constructor() {
    super()

    this.state = {
      current_scene : 'scene1'
    }

    this.enter_site = this.enter_site.bind(this)
  }

  enter_site() {

    let last_scene_number_char = this.state.current_scene.slice(-1)
    let last_scene_number_int = parseInt(last_scene_number_char)
    let new_scene_number_int = last_scene_number_int + 1
    let new_scene_number_char = new_scene_number_int.toString()

    let new_scene = ''

    if (new_scene_number_char == '6') {
      new_scene = 'user_access'
    } else {
      new_scene = this.state.current_scene.slice(0, -1) + new_scene_number_char
    }

    this.setState({ current_scene : new_scene })
  }

  render() {

    let current_text = <div className='textContainer'></div>

    if (this.state.current_scene == 'scene1') {
      current_text = <div className='textContainer'>
        <p className='text'>Hey there, welcome to my personal site!</p>
        <p className='text'>My name is Nick and I'll be showing you around today.</p>
      </div>
    } else if (this.state.current_scene == 'scene2') {
      current_text = <div className='textContainer'>
        <p className='text'>First off, Allow me to introduce myself.</p>
      </div>
    } else if (this.state.current_scene == 'scene3') {
      current_text = <div className='introDiv'>
        <div className='textContainer'>
          <p className='text'>My name is Nicholas White.</p>
        </div>
      </div>
    } else if (this.state.current_scene == 'scene4') {
      current_text = <div className='textContainer'>
        <p className='text'>Nothing!</p>
        <p className='text'>My name is Nicholas White and I'll be showing you around today.</p>
      </div>
    } else if (this.state.current_scene == 'scene5') {
      current_text = <div className='textContainer'>
        <p className='text'>Nothing!</p>
        <p className='text'>My name is Nicholas White and I'll be showing you around today.</p>
      </div>
    } else {
      current_text = <div className='textContainer'>
        <p className='text'>Get out of the developer console please.</p>
      </div>
    }

    if (this.state.current_scene == 'user_access') {
      return (
        <div id="app">


          <Router>
          <div className="App">

            <HeaderComponent></HeaderComponent>

            <div>
              <Route exact path="/resume" component={Resume} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/research" component={Research} />
              <Route exact path="/articles" component={Articles} />
            </div>


          </div>
        </Router>
        </div>
      );
    } else {

      return (
        <div id="siteGreetingContainer">

          <div className='siteGreetingDiv'>
            {current_text}
            <button id='siteEnterButton' onClick={this.enter_site}>Next</button>
          </div>

        </div>
      );
    }

  }
}

export default App;
