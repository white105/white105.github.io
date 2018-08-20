import React, { Component } from 'react';
import GPACalculator from '../GPACalculator/index.js';
import { UserCard, RepoCard } from 'react-github-cards';
import 'react-github-cards/dist/default.css';

class Projects extends Component {

  render() {
    return (
      <div>
        <div className='githubProjectsDiv'>
          <div className='projectsColumn' id='projectsColumn1'>
            <RepoCard username="white105" repo="csc-395" className='githubRepo' />
            <RepoCard username="white105" repo="Rubric-Calculator" className='githubRepo' />
          </div>
          <div className='projectsColumn' id='projectsColumn2'>
            <RepoCard username="white105" repo="react-gpa" className='githubRepo' />
            <RepoCard username="white105" repo="react-gpa" className='githubRepo' />
          </div>
        </div>
        <hr></hr>

        <GPACalculator></GPACalculator>

      </div>
    );
  }
}

export default Projects;
