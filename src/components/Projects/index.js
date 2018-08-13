import React, { Component } from 'react';
import { UserCard, RepoCard } from 'react-github-cards';
import 'react-github-cards/dist/default.css';

class Projects extends Component {

  render() {
    return (
      <div className='projectsDiv'>
        <RepoCard username="white105" repo="csc-395" className='githubRepo' />
        <RepoCard username="white105" repo="Rubric-Calculator" className='githubRepo' />
      </div>
    );
  }
}

export default Projects;
