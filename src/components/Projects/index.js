import React, { Component } from 'react';
import GPACalculator from '../GPACalculator/index.js';
import { UserCard, RepoCard } from 'react-github-cards';
import 'react-github-cards/dist/default.css';

class Projects extends Component {

  render() {
    return (
      <div>
        <div className='githubProjectsDiv'>
          <RepoCard username="white105" repo="csc-395" className='githubRepo' />
          <RepoCard username="white105" repo="Rubric-Calculator" className='githubRepo' />
        </div>
        <hr></hr>

        <GPACalculator></GPACalculator>

      </div>
    );
  }
}

export default Projects;
