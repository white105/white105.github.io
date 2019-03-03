import React, { Component } from 'react';
import './App.css';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";

import HeaderComponent from './components/HeaderComponent/index.js'
import Container from './components/Container/index.js'



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

    return (
      <div id="app">


        <Router>
        <div className='content'>

          <HeaderComponent></HeaderComponent>

          <hr id='splitter'></hr>

          <Container></Container>

        </div>
      </Router>

      </div>
    )
  }
}



export default App;
