import React, { Component } from "react";
import "./App.css";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";

import HeaderComponent from "./components/HeaderComponent/index.js";
import Container from "./components/Container/index.js";
import FontAwesome from "react-fontawesome";

class App extends Component {
  constructor() {
    super();

    this.state = {
      current_page: "home",
    };

    this.navigateSocial = this.navigateSocial.bind(this);
  }

  navigateSocial(event) {
    console.log("social network", event);
  }

  render() {
    return (
      <div id="app">
        <Router>
          <div className="content">
            <HeaderComponent></HeaderComponent>

            <hr id="splitter"></hr>

            <Container></Container>
          </div>
        </Router>

        <hr></hr>

        <div className="siteFooter">
          <div className="footerCopyright">
            <h3 className="copyrightHeader">&copy; NICHOLAS WHITE 2022</h3>
          </div>

          <div className="fontAwesomeIconDiv">
            <a
              className="iconLink"
              href="https://github.com/white105"
              id="githubIcon"
            >
              <FontAwesome
                className="fontAwesomeIcon"
                name="github"
                style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
              />
            </a>

            <a
              className="iconLink"
              href="https://twitter.com/nicholaswwhite"
              id="twitterIcon"
            >
              <FontAwesome
                className="fontAwesomeIcon"
                name="twitter"
                style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
              />
            </a>

            <a className="iconLink" href="https://www.instagram.com/nickwwhite">
              <FontAwesome
                className="fontAwesomeIcon"
                name="instagram"
                id="instagramIcon"
                style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
              />
            </a>

            <a
              className="iconLink"
              href="https://www.linkedin.com/in/nicholas-w-white/"
              id="linkedinIcon"
            >
              <FontAwesome
                className="fontAwesomeIcon"
                name="linkedin"
                style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
              />
            </a>

            <a
              className="iconLink"
              href="https://www.twitch.tv/nickwhitettv"
              id="twitchIcon"
            >
              <FontAwesome
                className="fontAwesomeIcon"
                name="twitch"
                style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
              />
            </a>

            <a
              className="iconLink"
              href="https://www.youtube.com/nickwhite"
              id="youtubeIcon"
            >
              <FontAwesome
                className="fontAwesomeIcon"
                name="youtube"
                style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
