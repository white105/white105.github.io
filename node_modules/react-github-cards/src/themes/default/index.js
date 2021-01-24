"use strict";
import React from 'react';
import './default.scss';


class UserCard extends React.Component {
  constructor(props) {
    super(props);
    this.apiRoot = 'https://api.github.com/users';
    this.state = {};
  }

  componentDidMount() {
    (async () => {
      try {
        let address = `${this.apiRoot}/${this.props.username}`;
        if (this.props.clientId && this.props.clientSecret) {
            address += `?client_id=${this.props.clientId}&client_secret=${this.props.clientSecret}`
        }
        const response = await fetch(address);
        const user = await response.json();
        this.setState({ user });
      } catch (err) {
        console.error(err.message);
      }
    })();
  }

  render() {
    if (this.state.user) {
      const { username } = this.props;
      const avatar_url = this.state.user.avatar_url + '&s=48';
      const profileUrl = this.state.user.html_url;
      const gistUrl = `https://gist.github.com/${username}`;
      const followersUrl = `${profileUrl}/followers`;
      const repositoriesUrl = `${profileUrl}/repositories`;

      return (
        <div className="default-theme">
          <div className="github-card user-card">
            <div className="header">
              <a className="avatar" href={profileUrl}>
                <img src={avatar_url} />
                <strong>{this.state.user.name}</strong>
                <span>@{username}</span>
              </a>
              <a className="button" href={profileUrl}>Follow</a>
            </div>
            <ul className="status">
              <li><a href={repositoriesUrl}><strong>{this.state.user.public_repos} </strong>Repos</a></li>
              <li><a href={gistUrl}><strong>{this.state.user.public_gists} </strong>Gist</a></li>
              <li><a href={followersUrl}><strong>{this.state.user.followers} </strong>Followers</a></li>
            </ul>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

UserCard.propTypes = {
  username: React.PropTypes.string.isRequired
};

class RepoCard extends React.Component {
  constructor(props) {
    super(props);
    this.apiRoot = 'https://api.github.com/repos';
    this.state = {};
  }

  componentDidMount() {
    (async () => {
      try {
        let address = `${this.apiRoot}/${this.props.username}/${this.props.repo}`;
        if (this.props.clientId && this.props.clientSecret) {
            address += `?client_id=${this.props.clientId}&client_secret=${this.props.clientSecret}`
        }
        const response = await fetch(address);
        const repo = await response.json();
        this.setState({ repo });
      } catch (err) {
        console.error(err.message);
      }
    })();
  }

  render() {
    if (this.state.repo) {
      const avatar_url = this.state.repo.owner.avatar_url + '&s=48';
      const profileUrl = this.state.repo.owner.html_url;
      const repoUrl = this.state.repo.html_url;
      const repoName = this.state.repo.name;
      const user = this.state.repo.owner.login;
      const action = this.state.repo.fork ? 'Forked By': 'Created By';
      const description = this.state.repo.description || 'No description';
      return (
        <div className="default-theme">
          <div className="github-card repo-card">
            <div className="header">
              <a className="avatar" href={profileUrl}>
                <img src={avatar_url} />
              </a>
              <strong className="name">
                <a href={repoUrl}>{repoName}</a>
              </strong>
              <span>{action}<a href={profileUrl}> {user} </a></span>
              <a className="button" href={repoUrl}>Star</a>
            </div>
            <div className="content">{description}</div>
            <ul className="status">
              <li><strong>{this.state.repo.forks_count}</strong> Fork </li>
              <li><strong>{this.state.repo.watchers_count}</strong> Stars </li>
            </ul>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

RepoCard.propTypes = {
  username: React.PropTypes.string.isRequired,
  repo: React.PropTypes.string.isRequired,
}

export { UserCard, RepoCard };
