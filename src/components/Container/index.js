import React, { Component } from 'react';
import styled from "styled-components";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from '../../components/Home/index.js';
import Articles from '../../components/Articles/index.js';
import Projects from '../../components/Projects/index.js';
import Hackathons from '../../components/Hackathons/index.js';
import Research from '../../components/Research/index.js';
import Resume from '../../components/Resume/index.js';
import Design from '../../components/Design/index.js';
import Services from '../../components/Services/index.js';
import Contact from '../../components/Contact/index.js';
import Experience from '../../components/Experience/index.js';
import Noogle from '../../components/Noogle/index.js';
import GPACalculator from '../../components/GPACalculator/index.js';

import FontAwesome from 'react-fontawesome';

function Container({ location }) {
  return (
    <Wrapper>

        <TransitionGroup className="items-section__list">

        <CSSTransition key={location.key} timeout={500} classNames="move">

        <div id='content'>
          <Route exact path="/" render={() => (<Redirect to="/experience"></Redirect>)} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path='/hackathons' component={Hackathons} />
          <Route exact path="/research" component={Research} />
          <Route exact path="/articles" component={Articles} />
          <Route exact path="/design" component={Design} />
          <Route exact path="/projects/noogle" component={Noogle} />
          <Route exact path="/projects/gpa-calculator" component={GPACalculator} />
        </div>

        </CSSTransition>

        </TransitionGroup>

    </Wrapper>

  )
}


const Wrapper = styled.div`
  .fade-enter {
    opacity: 0.01;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }

  div.transition-group {
    position: relative;
  }

  section.route-section {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }
`;

export default withRouter(Container);
