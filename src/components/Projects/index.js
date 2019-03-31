import React, { Component } from 'react';
import { UserCard, RepoCard } from 'react-github-cards';
import { Carousel } from 'react-responsive-carousel';
import NoogleLogo from '../../assets/media/newGoogle.png'
import MeemzIO from '../../assets/hackathon-pics/MeemzIO.png'
import { Link } from 'react-router-dom';
import 'react-github-cards/dist/default.css';
import GPACalculator from '../GPACalculator/index.js'
import Chess from '../Chess/index.js'
import Noogle from '../Noogle/index.js'


class Projects extends Component {

  render() {
    return (
      <div className='projectsContainer'>


        <div className='githubProjectsDiv'>
          <div className='projectsColumn' id='projectsColumn1'>
            <RepoCard username="white105" repo="DandyHacks" className='githubRepo' />
            <RepoCard username="white105" repo="Rubric-Calculator" className='githubRepo' />
          </div>
          <div className='projectsColumn' id='projectsColumn2'>
            <RepoCard username="white105" repo="white105.github.io" className='githubRepo' />
            <RepoCard username="white105" repo="react-gpa" className='githubRepo' />
          </div>
        </div>

        <hr></hr>

        <div className='projectDiv'>
          <h2 className='turtlebotHeader'>Meemz.io</h2>
         <a href='https://meemz-io.herokuapp.com/'><img src={MeemzIO} id="MeemzIO"></img></a>
        </div>

        <hr></hr>


        <h2 className='turtlebotHeader'>Turtlebot Robotics 2017</h2>

        <video width = "500" height = "300" controls preload='preload' className='turtlebotVideo'>
         <source src = {require('../../assets/videos/turtlebot.mp4')} type = "video/mp4"></source>
         This browser doesn't support video tag.
         </video>

         <p className="projectsParagraph">During the Fall semester of 2017 I worked as a student researcher implementing turtlebot autonomy with ROS and Linux</p>

         <p className='projectsParagraph'><u>Contributions</u></p>
         <p className='projectsParagraph'>I helped assemble the original hardware and software including the asus camera, raspberry pi, and installation of Linux.
         I then worked through ROS tutorials and implemented mapping and navigation. Our research team consisted of four people and including myself, my classmate,
         and two professors.</p>

         <hr></hr>

         <GPACalculator></GPACalculator>

         <hr></hr>

         <div className='noogleContainer'>
          <Link to='/projects/noogle'><img src={NoogleLogo} id="projectNoogle"></img></Link>
         </div>


      </div>
    );
  }
}

export default Projects;
