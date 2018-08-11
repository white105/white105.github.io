import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home/index.js'
import HeaderComponent from './components/HeaderComponent/index.js'
import Articles from './components/Articles/index.js'
import Projects from './components/Projects/index.js'
import Research from './components/Research/index.js'
import Resume from './components/Resume/index.js'

class App extends Component {

  render() {
    return (
      <div id="app">


        <Router>
        <div className="App">

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
      </div>
    )
  }
}

export default App;
