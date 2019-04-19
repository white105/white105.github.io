import React, { Component } from 'react';
import { UserCard, RepoCard } from 'react-github-cards';
import { Carousel } from 'react-responsive-carousel';
import NoogleLogo from '../../assets/media/newGoogle.png'
import MeemzIO from '../../assets/projects-assets/MeemzIO.png'
import { Link } from 'react-router-dom';
import 'react-github-cards/dist/default.css';
import GPACalculator from '../../assets/projects-assets/gpa-calculator.png'
import RubricCalculator from '../../assets/projects-assets/Rubric-Calculator.png'
import Chess from '../Chess/index.js'
import Noogle from '../../assets/projects-assets/noogle.png'
import BlockChain from '../../assets/projects-assets/blockchainub.png'
import BlockChainCrypto from '../../assets/projects-assets/backyard-crypto.png'
import SketchItLogo from '../../assets/hackathon-pics/sketchit.png'
import WhipLogo from '../../assets/hackathon-pics/whipLogo.png'
import CodeComp from '../../assets/projects-assets/codecomp.png'
import OneDentalMatch from '../../assets/projects-assets/odm.png'
import BarTabs from '../../assets/projects-assets/bar-tabs.png'
import MeemzIOGame from '../../assets/projects-assets/meemz-io-game.png'
import SketchItGame from '../../assets/projects-assets/sketch-it-game.png'
import BackyardCryptoProjectImage from '../../assets/projects-assets/backyard-project-image.png'
import UBProjectImage from '../../assets/projects-assets/ub-project-image.png'
import CanisiusProjectImage from '../../assets/projects-assets/canisius-project-image.png'
import BarTabsProjectImage from '../../assets/projects-assets/bar-tabs-project-image.png'
import ODMMobileProjectImage from '../../assets/projects-assets/odm-mobile-project-image.png'
import ODMWebProjectImage from '../../assets/projects-assets/odm-web-project-image.png'
import BarstoolProjectImage from '../../assets/projects-assets/barstool-project-image.png'

/*

<div className='githubProjectsDiv'>
  <div className='projectsColumn' id='projectsColumn1'>
    <RepoCard username="white105" repo="DandyHacks" className='githubRepo' />
    <RepoCard username="white105" repo="Rubric-Calculator" className='githubRepo' />
  </div>
  <div className='projectsColumn' id='projectsColumn2'>
    <RepoCard username="white105" repo="white105.github.io" className='githubRepo' />
    <RepoCard username="white105" repo="stanford-algorithms" className='githubRepo' />
  </div>
  <div className='projectsColumn' id='projectsColumn2'>
    <RepoCard username="white105" repo="csc-395" className='githubRepo' />
    <RepoCard username="white105" repo="meemz-io" className='githubRepo' />
  </div>
</div>

        <hr></hr>
*/

class Projects extends Component {

  render() {
    return (
      <div className='projectsContainer'>

        <div className='projectRow'>
          <div className='project'>
            <a href='https://backyardcrypto.com/'><img className='projectImage' src={BackyardCryptoProjectImage}></img></a>

            <div className="project_img__description" id='img_bottom_description'>
              <p className='photoText'>This is a group photo of my teamates Michael Henry, Daniel Kiselev, and I during the second half of Dandy Hacks. Unfortunately our other team member Yipeng Zhang wasn't around for the picture, but he is certainly included in our presentational picture on the next slide.</p>
              <p className='photoText'>Michael Henry and Daniel Kiselev are both seniors at the University of Rochester graduating in May of 2019 with Bachelors degrees in Computer Science. Yipeng Zhang is currently a sophomore at the University of Rochester expected to graduate with a degree in both Mathematics and Computer Science in 2021.</p>
              <p className='photoText'>When I planned to come to Dandy Hacks, I came with the intention of winning an award after my first hackathon resulted in a loss the prior week. When I arrived I asked many teams if I could join, but there wasn't really a good fit for me anywhere. After talking to about twenty different teams I found Mike and Dan.
              They said they were interested in trying to win an award and they already had the cool idea for our project. To make things easier on our team we decided to look for one more member. Yipeng was the first person I talked to and while he didn't have any prior javascript experience, he definitely seemed like a smart kid.</p>
              <p className='photoText'>I never expected our team to do as well as we did. We all got along great and it was the most fun I've had at a hackathon so far. It was the perfect balance of work and fun which is exactly what a hackathon is supposed to be.</p>
              <p className='photoText'>The next slide shows a picture of us giving a demo of our project "Whip" at the end of Dandy Hacks. It will also provide a description of the project as well as a link to the demo.</p>
            </div>

          </div>

          <div className='project'>
           <a href='https://rubric-calculator.herokuapp.com/'><img className='projectImage' src={ODMMobileProjectImage}></img></a>
          </div>


        </div>

        <div className='projectRow'>
          <div className='mobileProject'>
           <a href='https://www.hackbuf.com/'><img className='mobileProjectImage' src={BarTabsProjectImage}></img></a>
          </div>

          <div className='project'>
           <a href='https://rubric-calculator.herokuapp.com/'><img className='projectImage' src={UBProjectImage}></img></a>
          </div>
        </div>

        <div className='projectRow'>
          <div className='project'>
            <a href='https://rubric-calculator.herokuapp.com/'><img className='projectImage' src={ODMWebProjectImage}></img></a>
          </div>

          <div className='project'>
           <a href='https://rubric-calculator.herokuapp.com/'><img className='projectImage' src={BarstoolProjectImage}></img></a>
          </div>
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


      </div>
    );
  }
}

export default Projects;
