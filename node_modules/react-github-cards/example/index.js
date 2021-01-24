"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import * as Medium from '../src/themes/medium';
import * as Default from '../src/themes/default';
import autoBind from 'react-autobind';
import './index.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      theme: 'default',
      username: 'jkvim',
      repo: 'vivid.js'
    };
    this.themes = {
      'default': Default,
      'medium': Medium
    };
    autoBind(this);
  }
  onThemeChange(evt) {
    this.setState({
      theme: evt.target.value
    });
  }
  onSetState(state) {
    return () => {
      if (state in this.state) {
        this.setState({
          [state]: this.refs[state].value
        });
      }
    }
  }
  onResetState(state) {
    return () => {
      if (state in this.state) {
        this.setState({
          [state]: ''
        });
      }
    }
  }
  render() {
    const { UserCard, RepoCard } = this.themes[this.state.theme];
    return (
      <div id="root">
        <h1>Choose Theme</h1>
        <div className="theme-select">
          <select onChange={this.onThemeChange}>
            <option value="default">default</option>
            <option value="medium">medium</option>
          </select>
        </div>
        <div className="github-cards">
          <div className="input-wrapper">
            <input
              ref="username"
              placeholder="username"
              onBlur={this.onSetState('username')}
              onChange={this.onResetState('username')} />
            <input
              ref="repo"
              placeholder="repo"
              onBlur ={this.onSetState('repo')}
              onChange={this.onResetState('repo')} />
          </div>
          {this.state.username ?
            <UserCard username={this.state.username} /> : ''
          }
          {this.state.repo ?
            <RepoCard username={this.state.username} repo={this.state.repo} />: ''
          }
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
